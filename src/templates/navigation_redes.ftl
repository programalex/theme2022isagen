<div class="redes">  
  <div class="headerDisplayInline">
    <div class="selector-idioma">
       
        <#include "${full_templates_path}/language_selector.ftl" />
    </div>
    <div>
        <span class="separador"></span>
    </div>
    <div>
        <a href="${themeDisplay.getPathContext()}${top_menu_contactanos_url}">${top_menu_contactanos}</a>
    </div>
  </div>
  <div> 
    <span class="separador"></span>
  </div>
  <div id="buscarHeader" class="buscarHeader headerDisplayInline">
    <div class="iconSearchHeader"></div>
  </div>
</div>
<div id="inboxHeader" class="inboxHeader">
  <div id="searchClose" class="searchClose"></div>
  <div class="searchForm">

    <div id="portlet_3">
     <@liferay.search />
    </div>    
    <div id="searchPlaceholder" class="searchPlaceholder">Ingresa tu búsqueda</div>
    <div class="IconSearchInput iconSearchHeader"></div>
  </div>   
</div>