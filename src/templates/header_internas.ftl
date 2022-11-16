<#-- Plantilla para el encabezado de páginas internas -->

<#assign title_content = the_title?split("-") />
<#assign title_section = title_content?last />
<#-- Asigna el valor por defecto para el título de la página -->
<#assign page_title = layout.getHTMLTitle(locale) />
<#-- Si existe subtítulo. significa que se está navegando dentro de una subsección o resultados de búsqueda -->
<#if pageSubtitle??>
  <#assign page_title = languageUtil.get(locale, pageSubtitle)  />
</#if>
<#-- Traduce el título de resultados de búsqueda ya que por algún motivo siempre aparece en inglés -->
<#if page_title == "Search Results" >
  <#assign page_title = "Resultados de búsqueda"  />
</#if>
<!-- miga de pan, imagen principal -->
<section class="sectionHeader ${clase_pagina}">
  <!-- <img class="sectionHomeBackground" src="${images_folder}/enterate-header.png" alt=""> -->
  <div class="container">
    <div class="breadcrumbs">
      <h1 class="sectionHeaderTitle">${page_title}</h1>
      <div class="breadcrumbsSteps">
        <img src="${images_folder}/icono-marcador.png" alt="">
        <#-- <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Resultados de Búsqueda</a></li>
        </ul>
        -->
        <@liferay.breadcrumbs/>
      </div>
    </div>
  </div>    
</section>
