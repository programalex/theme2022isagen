<#assign languageSelector = "es">
<#if themeDisplay.getLanguageId() == "en_US" >
  <#assign languageSelector = "en">
</#if>
<#include "${full_templates_path}/footer_${languageSelector}.ftl" />
<footer id="footer" role="contentinfo">
  <div class="footerSections">
    <div class="footerFirstSect">
      <div class="container">
        <div class="footer-content">
          <div class="colFoot ">
            <h2>${footer_nosotros}</h2>
            <div class="listMenuFooter">    
              <div><a href="${themeDisplay.getPathContext()}${footer_nosotros_quienes_somos_url}">${footer_nosotros_quienes_somos}</a></div>
              <div class="${class_ajust_space_english}"><a href="${themeDisplay.getPathContext()}${footer_nosotros_junta_directiva_y_equipo_de_gerencia_url}">${footer_nosotros_junta_directiva_y_equipo_de_gerencia}</a></div>
              <div><a href="${themeDisplay.getPathContext()}${footer_nosotros_informe_de_gestion_url}">${footer_nosotros_informe_de_gestion}</a></div>            
              <div><a href="${themeDisplay.getPathContext()}${footer_nosotros_enterate_url}">${footer_nosotros_enterate}</a></div>              
              <div class="${class_display}"><a href="${footer_nosotros_trabaja_con_nosotros_url}" target="_blank">${footer_nosotros_trabaja_con_nosotros}</a></div>
            </div>
          </div>
          <div class="colFoot">
            <h2>${footer_nuestro_negocio}</h2>
            <div class="listMenuFooter">  
              <div><a href="${themeDisplay.getPathContext()}${footer_nuestro_negocio_generamos_energia_url}">${footer_nuestro_negocio_generamos_energia}</a></div>
              <div><a href="${themeDisplay.getPathContext()}${footer_nuestro_negocio_comercializamos_energia_url}">${footer_nuestro_negocio_comercializamos_energia}</a></div>
            </div>
          </div>
          <div class="colFoot">
            <h2>${footer_sostenibilidad}</h2>
            <div class="listMenuFooter">              
              <div><a href="${themeDisplay.getPathContext()}${footer_sostenibilidad_practicas_url}">${footer_sostenibilidad_practicas}</a></div>              
            </div>
          </div>
          <div class="colFoot colum3">
            <h2>${footer_inversionistas}</h2>
            <div class="listMenuFooter">
              <div><a href="${themeDisplay.getPathContext()}${footer_inversionistas_gobierno_corporativo_url}">${footer_inversionistas_gobierno_corporativo}</a></div>
              <div><a href="${themeDisplay.getPathContext()}${footer_inversionistas_resultados_financieros_url}">${footer_inversionistas_resultados_financieros}</a></div>
              <div><a href="${themeDisplay.getPathContext()}${footer_inversionistas_emisiones_vigentes_url}">${footer_inversionistas_emisiones_vigentes}</a></div>
              <div><a href="${themeDisplay.getPathContext()}${footer_inversionistas_informacion_accionistas_url}">${footer_inversionistas_informacion_accionistas}</a></div>
              <div><a href="${themeDisplay.getPathContext()}${footer_inversionistas_informacion_relevante_url}">${footer_inversionistas_informacion_relevante}</a></div>
            </div>
          </div>
          <div class="colFoot">
            <h2>${footer_proveedores}</h2>
            <div class="listMenuFooter">
              <div><a href="${themeDisplay.getPathContext()}${footer_proveedores_contratacion_bienes_servicios_url}">${footer_proveedores_contratacion_bienes_servicios}</a></div>
              <div class="${class_display}"><a href="${themeDisplay.getPathContext()}${footer_proveedores_certificados_de_retencion_url}">${footer_proveedores_certificados_de_retencion}</a></div>            
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footerLow">
      <div class="container">
        <div class="footerSecondtSect">
          <div class="colSocial "><a href="${themeDisplay.getPathContext()}${footer_contactanos_url}">${footer_contactanos}</a></div>          
          <div class="colSocial "><a href="${themeDisplay.getPathContext()}${footer_terminos_y_condiciones_url}" target="_blank">${footer_terminos_y_condiciones}</a></div>
          <div class="colSocial "><a href="${themeDisplay.getPathContext()}${footer_proteccion_de_datos_url}">${footer_proteccion_de_datos}</a></div>
          <div class="colSocial "><a href="${themeDisplay.getPathContext()}${footer_ley_transparencia_url}">${footer_ley_transparencia}</a></div> 
          <div class="colSocial "><a href="${themeDisplay.getPathContext()}${footer_resolucion_creg_url}">${footer_resolucion_creg}</a></div>
        </div>
        <div class="footerThirdSect">
          <div class="logoSuperServicios"></div>
        </div>
      </div>
    </div>
  </div>
</footer>