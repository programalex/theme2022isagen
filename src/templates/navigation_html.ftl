<div id="banner">
        <#assign languageSelector = "es">
        <#if themeDisplay.getLanguageId() == "en_US" >
            <#assign languageSelector = "en">
        </#if>
        <#include "${full_templates_path}/navigation_${languageSelector}.ftl" />
        <#include "${full_templates_path}/navigation_redes.ftl" />
        <!-- Menu Principal -->
        <nav id="nav" class="nav">
            <div class="menuContainer">
                <div class="container containerHeight">
                    <div class="${class_logo}" onclick="window.location = '/web/guest/home'"></div>
                    <div id="menuMovil" class="menuMovil"></div>      
                    <ul id="menu" class="menu">
                        <div class="backMobile">
                            <div id="backMegaMenu"><span class="IconFlechaBack"></span>REGRESAR</div>
                            <div id="nameItem" class="menuParent">NOMBRE</div>
                        </div>
                        <li class="menuItem itemNostros" id="menuNosMobile">
                            <a data-color="azul" class="nosotros" href="#">
                                ${menu_nosotros}
                                <div class="IconFlecha"></div>
                                <div class="menuItembar"></div>
                            </a>
                            <div class="megaMenu">
                                <ul>
                                    <li class="itemMegaMenu itemCol4">   
                                            <h3 class="ItemMenuMobile" onclick="location.href='${themeDisplay.getPathContext()}${menu_nosotros_quienes_somos_url}'">${menu_nosotros_quienes_somos}</h3>   
                                    </li>
                                    <li class="itemMegaMenu itemCol4">  
                                            <h3 class="ItemMenuMobile" onclick="location.href='${themeDisplay.getPathContext()}${menu_nosotros_junta_directiva_y_equipo_de_gerencia_url}'">${menu_nosotros_junta_directiva_y_equipo_de_gerencia}</h3> 
                                    </li>
                                    <li class="itemMegaMenu itemCol4"> 
                                            <h3 class="ItemMenuMobile" onclick="location.href='${themeDisplay.getPathContext()}${menu_nosotros_informe_de_gestion_url}'">${menu_nosotros_informe_de_gestion}</h3>    
                                    </li> 
                                    <li class="itemMegaMenu itemCol4"> 
                                            <h3 class="ItemMenuMobile" onclick="location.href='${themeDisplay.getPathContext()}${menu_nosotros_enterate_url}'">${menu_nosotros_enterate}</h3> 
                                    </li>  
                                    <li class="${class_hide_english_desktop} itemMegaMenu itemCol4"> 
                                            <h3 class="ItemMenuMobile" onclick="window.open('${menu_nosotros_trabaja_con_nosotros_url}','_blank')">${menu_nosotros_trabaja_con_nosotros}</h3> 
                                    </li>                                                                                      
                                </ul>
                            </div>
                        </li>
                        <li class="menuItem itemNostros" id="menuNosDesk">
                            <a data-color="azul" class="nosotros" href="#">
                                ${menu_nosotros}
                                <div class="IconFlecha"></div>
                                <div class="menuItembar"></div>
                            </a>
                            <div class="megaMenu">
                                <ul>
                                    <li class="itemMegaMenu itemCol4">
                                        <div class="ItemMenuDesktop">                                                   
                                            <div class="abrirMenu"></div>
                                            <ul>                        
                                                <li><a href="${themeDisplay.getPathContext()}${menu_nosotros_quienes_somos_url}">${menu_nosotros_quienes_somos}</a></li>
                                            </ul>
                                        </div>
                                    </li>  
                                        <li class="itemMegaMenu itemCol4">
                                        <div class="ItemMenuDesktop">                                                   
                                            <div class="abrirMenu"></div>
                                            <ul>                        
                                                <li><a href="${themeDisplay.getPathContext()}${menu_nosotros_junta_directiva_y_equipo_de_gerencia_url}">${menu_nosotros_junta_directiva_y_equipo_de_gerencia}</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="itemMegaMenu itemCol4">
                                        <div class="ItemMenuDesktop">                                                   
                                            <div class="abrirMenu"></div>
                                            <ul>                        
                                                <li><a href="${themeDisplay.getPathContext()}${menu_nosotros_informe_de_gestion_url}">${menu_nosotros_informe_de_gestion}</a></li>
                                            </ul>
                                        </div>
                                    </li> 
                                    <li class="itemMegaMenu itemCol4">
                                        <div class="ItemMenuDesktop">                                                   
                                            <div class="abrirMenu"></div>
                                            <ul>                        
                                                <li><a href="${themeDisplay.getPathContext()}${menu_nosotros_enterate_url}">${menu_nosotros_enterate}</a></li>
                                            </ul>
                                        </div>
                                    </li> 
                                    <li class="${class_hide_english_desktop} itemMegaMenu itemCol4">
                                        <div class="ItemMenuDesktop">                                                   
                                            <div class="abrirMenu"></div>
                                            <ul>                        
                                                <li><a href="${menu_nosotros_trabaja_con_nosotros_url}">${menu_nosotros_trabaja_con_nosotros}</a></li>
                                            </ul>
                                        </div>
                                    </li> 
                                </ul>
                            </div>
                        </li>
                        <li class="menuItem itemNegocios" id="menuNuestroMobile">
                            <a data-color="azul-claro" class="negocio" href="#">
                                ${menu_nuestro_negocio}
                                <div class="IconFlecha"></div>
                                <div class="menuItembar"></div>
                            </a>
                            <div class="megaMenu">
                                <ul>                          
                                    <li class="itemMegaMenu itemCol4">                    
                                        <h3 class="ItemMenuMobile" onclick="location.href='${themeDisplay.getPathContext()}${menu_nuestro_negocio_generamos_energia_url}'">${menu_nuestro_negocio_generamos_energia}</h3>
                                    </li>

                                    <li class="itemMegaMenu itemCol1">
                                        <h3>
                                            ​${menu_nuestro_negocio_comercializamos_energia}
                                            <div class="abrirMenu"></div>
                                        </h3>
                                        <ul>
                                            <li><a href="${themeDisplay.getPathContext()}${menu_nuestro_negocio_comercializamos_energia_gestion_comercial_url}">${menu_nuestro_negocio_comercializamos_energia_gestion_comercial}</a></li>
                                            <li class="${class_hide_english_desktop}"><a href="${themeDisplay.getPathContext()}${menu_nuestro_negocio_comercializamos_energia_informacion_regulatoria_url}">${menu_nuestro_negocio_comercializamos_energia_informacion_regulatoria}</a></li>
                                            <li class="${class_hide_english_desktop}"><a href="${menu_nuestro_negocio_comercializamos_energia_pagos_en_linea_pse_url}" class="pago_pse">${menu_nuestro_negocio_comercializamos_energia_pagos_en_linea_pse}</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                    </li>                              

                    <li class="menuItem itemNegocios" id="menuNuestroDesk">
                            <a data-color="azul-claro" class="negocio" href="#">
                                ${menu_nuestro_negocio}
                                <div class="IconFlecha"></div>
                                <div class="menuItembar"></div>
                            </a>
                            <div class="megaMenu">
                                <ul>                           
                                    <li class="itemMegaMenu itemCol4">                                                
                                        <div class="ItemMenuDesktop">
                                            <div class="abrirMenu"></div>
                                            <ul>
                                                <li><a href="${themeDisplay.getPathContext()}${menu_nuestro_negocio_generamos_energia_url}">${menu_nuestro_negocio_generamos_energia}</a></li>                         
                                            </ul>
                                        </div>
                                    </li>

                                    <li class="itemMegaMenu itemCol4 infoAccion">
                                        <div class="ItemMenuDesktop">
                                            <div class="abrirMenu"></div>
                                            <ul>
                                                <li><a href="#">${menu_nuestro_negocio_comercializamos_energia}</a>
                                                    <div class="IconFlechaMedium"></div>
                                                    <div class="menuInfoAccion">
                                                        <ul>
                                                            <li><a href="${themeDisplay.getPathContext()}${menu_nuestro_negocio_comercializamos_energia_gestion_comercial_url}">${menu_nuestro_negocio_comercializamos_energia_gestion_comercial}</a></li>
                                                            <li class="${class_hide_english_desktop}"><a href="${themeDisplay.getPathContext()}${menu_nuestro_negocio_comercializamos_energia_informacion_regulatoria_url}">${menu_nuestro_negocio_comercializamos_energia_informacion_regulatoria}</a></li>
                                                            <li class="${class_hide_english_desktop}">
                                                                <a href="${menu_nuestro_negocio_comercializamos_energia_pagos_en_linea_pse_url}" class="pago_pse">${menu_nuestro_negocio_comercializamos_energia_pagos_en_linea_pse}</a></li>             
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>                                       
                                    </li>
                                </ul>
                            </div>
                        </li>                    
                        <li  class="menuItem itemSostenibilidad">
                            <a data-color="verde" class="sostenibilidad" href="${themeDisplay.getPathContext()}${menu_sostenibilidad_url}">
                                ${menu_sostenibilidad}
                                <div class="menuItembar"></div>
                            </a>
                        </li>
                        <li  class="menuItem itemInversionistas" id="menuInverMobile">
                            <a data-color="rojo" class="inversionistas" href="#">
                                ${menu_inversionistas}
                                <div class="IconFlecha"></div>
                                <div class="menuItembar"></div>
                            </a>
                            <div class="megaMenu">
                                <ul>                     
                                    <li class="itemMegaMenu itemCol4">                    
                                        <h3 class="ItemMenuMobile" onclick="location.href='${themeDisplay.getPathContext()}${menu_inversionistas_gobierno_corporativo_url}'">${menu_inversionistas_gobierno_corporativo}</h3>
                                    </li>

                                    <li class="itemMegaMenu itemCol4">                        
                                        <h3 class="ItemMenuMobile" onclick="location.href='${themeDisplay.getPathContext()}${menu_inversionistas_resultados_financieros_url}'">${menu_inversionistas_resultados_financieros}</h3>
                                    </li>

                                    <li class="itemMegaMenu itemCol4">

                                        <h3 class="ItemMenuMobile" onclick="location.href='${themeDisplay.getPathContext()}${menu_inversionistas_emisiones_vigentes_url}'">${menu_inversionistas_emisiones_vigentes}</h3>
                                    </li>

                                    <li class="itemMegaMenu itemCol1">
                                        <h3>
                                            ​${menu_inversionistas_informacion_accionistas}
                                            <div class="abrirMenu"></div>
                                        </h3>
                                        <ul> 
                                            <li><a href="${themeDisplay.getPathContext()}${menu_inversionistas_informacion_accionistas_asamblea_general_de_accionistas_url}">${menu_inversionistas_informacion_accionistas_asamblea_general_de_accionistas}</a></li>
                                            <li class="${class_hide_english_desktop}"><a href="${themeDisplay.getPathContext()}${menu_inversionistas_informacion_accionistas_servicios_en_linea_url}">${menu_inversionistas_informacion_accionistas_servicios_en_linea}</a></li>
                                            <li><a href="${themeDisplay.getPathContext()}${menu_inversionistas_informacion_accionistas_canales_de_contacto_url}">${menu_inversionistas_informacion_accionistas_canales_de_contacto}</a></li>
                                        </ul>
                                    </li>

                                    <li class="itemMegaMenu itemCol4">                         
                                        <h3 class="ItemMenuMobile" onclick="location.href='${themeDisplay.getPathContext()}${menu_inversionistas_informacion_relevante_url}'">${menu_inversionistas_informacion_relevante}</h3>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menuItem itemInversionistas" id="menuInverDesk">
                            <a data-color="rojo" class="inversionistas" href="#">
                                ${menu_inversionistas}
                                <div class="IconFlecha"></div>
                                <div class="menuItembar"></div>
                            </a>
                            <div class="megaMenu menuInversionistas ${class_adjust_menu_investors}">
                                <ul>                     
                                    <li class="itemMegaMenu itemCol4">
                                        <div class="ItemMenuDesktop">                        
                                            <div class="abrirMenu"></div>                         
                                            <ul>                        
                                                <li><a href="${themeDisplay.getPathContext()}${menu_inversionistas_gobierno_corporativo_url}">${menu_inversionistas_gobierno_corporativo}</a></li>
                                            </ul>
                                        </div>                                              
                                    </li>

                                    <li class="itemMegaMenu itemCol4">
                                        <div class="ItemMenuDesktop">
                                            <div class="abrirMenu"></div>
                                            <ul>                        
                                                <li><a href="${themeDisplay.getPathContext()}${menu_inversionistas_resultados_financieros_url}">${menu_inversionistas_resultados_financieros}</a></li>
                                            </ul>
                                        </div>                                               
                                    </li>

                                    <li class="itemMegaMenu itemCol4">
                                        <div class="ItemMenuDesktop">
                                            <div class="abrirMenu"></div>
                                            <ul>
                                                <li><a href="${themeDisplay.getPathContext()}${menu_inversionistas_emisiones_vigentes_url}">${menu_inversionistas_emisiones_vigentes}</a></li>
                                            </ul>
                                        </div>                                          
                                    </li>

                                    <li class="itemMegaMenu itemCol4 infoAccion">
                                        <div class="ItemMenuDesktop">
                                            <div class="abrirMenu"></div>
                                            <ul>
                                                <li><a href="#">${menu_inversionistas_informacion_accionistas}</a>
                                                    <div class="IconFlechaMedium"></div>
                                                    <div class="menuInfoAccion">
                                                        <ul>
                                                            <li><a href="${themeDisplay.getPathContext()}${menu_inversionistas_informacion_accionistas_asamblea_general_de_accionistas_url}">${menu_inversionistas_informacion_accionistas_asamblea_general_de_accionistas}</a></li>
                                                            <li class="${class_hide_english_desktop}"><a href="${themeDisplay.getPathContext()}${menu_inversionistas_informacion_accionistas_servicios_en_linea_url}">${menu_inversionistas_informacion_accionistas_servicios_en_linea}</a></li>
                                                            <li><a href="${themeDisplay.getPathContext()}${menu_inversionistas_informacion_accionistas_canales_de_contacto_url}">${menu_inversionistas_informacion_accionistas_canales_de_contacto}</a></li>
                                                            <li><a href="${themeDisplay.getPathContext()}${menu_inversionistas_informacion_accionistas_readquisicion_de_acciones_url}">${menu_inversionistas_informacion_accionistas_readquisicion_de_acciones}</a></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>                                       
                                    </li>

                                    <li class="itemMegaMenu itemCol4">
                                        <div class="ItemMenuDesktop">
                                            <div class="abrirMenu"></div>
                                            <ul>
                                                <li><a href="${themeDisplay.getPathContext()}${menu_inversionistas_informacion_relevante_url}">${menu_inversionistas_informacion_relevante}</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                            <li class="menuItem itemProveedores" id ="menuProveMobile">
                        <a data-color="amarillo" class="proveedores" href="#">
                            ${menu_proveedores}
                            <div class="IconFlecha"></div>
                            <div class="menuItembar"></div>
                        </a>
                        <div class="megaMenu">
                            <ul>
                                <li class="itemMegaMenu itemCol4">
                                    <h3 class="ItemMenuMobile" onclick="location.href='${themeDisplay.getPathContext()}${menu_proveedores_contratacion_bienes_servicios_url}'">${menu_proveedores_contratacion_bienes_servicios}</h3>
                                </li>  
                                <li class=" ${class_hide_english_desktop} itemMegaMenu itemCol4">
                                    <h3 class="ItemMenuMobile" onclick="location.href='${themeDisplay.getPathContext()}${menu_proveedores_certificados_de_retencion_url}'">${menu_proveedores_certificados_de_retencion}</h3>
                                </li>
                                 <li class=" ${class_hide_english_desktop} itemMegaMenu itemCol4">
                                    <h3 class="ItemMenuMobile" onclick="location.href='${themeDisplay.getPathContext()}${menu_proveedores_certificados_de_retencion_url}'">${menu_proveedores_certificados_de_retencion}</h3>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menuItem itemProveedores" id="menuProveDesk">
                            <a data-color="amarillo" class="proveedores" href="#">
                                ${menu_proveedores}
                                <div class="IconFlecha"></div>
                                <div class="menuItembar"></div>
                            </a>
                            <div class="megaMenu ${class_adjust_menu_suppliers}">
                                <ul>
                                    <li class="itemMegaMenu itemCol4">
                                        <div class="ItemMenuDesktop">                                                   
                                            <div class="abrirMenu"></div>
                                            <ul>                        
                                                <li><a href="${themeDisplay.getPathContext()}${menu_proveedores_contratacion_bienes_servicios_url}">${menu_proveedores_contratacion_bienes_servicios}</a></li>
                                            </ul>
                                        </div>
                                    </li>  
                                    <li class=" ${class_hide_english_desktop} itemMegaMenu itemCol4">
                                        <div class="ItemMenuDesktop">
                                                <div class="abrirMenu"></div>
                                            <ul>
                                                <li><a href="${themeDisplay.getPathContext()}${menu_proveedores_certificados_de_retencion_url}">${menu_proveedores_certificados_de_retencion}</a></li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li class=" ${class_hide_english_desktop} itemMegaMenu itemCol4">
                                        <div class="ItemMenuDesktop">
                                                <div class="abrirMenu"></div>
                                            <ul>
                                                <li><a href="${themeDisplay.getPathContext()}${menu_proveedores_portafolio_de_servicios_url}">${menu_proveedores_portafolio_de_servicios}</a></li>
                                            </ul>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </li>                 
                    </ul>
                </div>
            </div>
        </nav>
    <!-- Fin Menu Principal -->
</div>