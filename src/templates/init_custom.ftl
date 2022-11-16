<#assign 
    the_title = languageUtil.get(locale, the_title, page.getName(locale))
    friendlyurl_page = layout.getFriendlyURL() 
    <!-- FriendlyURL: ${friendlyurl_page} -->
    brand_name = ""

    all_clases_pagina = friendlyurl_page?replace("/"," ")?trim 
    <!-- All classes: ${all_clases_pagina} -->
    lista_url_pagina = friendlyurl_page?replace("/"," ")?word_list 
    clase_pagina = "home" 
/>
<#if lista_url_pagina?size gt 0>
    <#assign clase_pagina = all_clases_pagina />
</#if>
    
<#assign url_params = theme_display.getURLCurrent()?split("?") />
<#if clase_pagina == "home" && url_params?size gt 1>
    <#assign 
        url_params_last = url_params?last 
        url_params_last = url_params_last + '&'  <#-- Agrega un separador de par�metros por si el siguiente string de b�squeda est� al final -->
        search_portlet_lst = url_params_last?split("p_p_id=3&")  <#-- Detecta si se trata de los par�metros de b�squeda, sino los ignora. -->
        login_portlet_lst = url_params_last?split("p_p_id=58&")  <#-- Detecta si se trata del portlet de login, sino los ignora. -->
    />
    <#if search_portlet_lst?size gt 1 >
        <#assign  clase_pagina = "search" />
    <#elseif login_portlet_lst?size gt 1 >
        <#assign  clase_pagina = "login" />
    </#if>
</#if>

<#if clase_pagina != "home">
    <#assign  brand_name = " - ISAGEN" />
</#if>

<#assign  url_home = themeDisplay.getPathContext() />