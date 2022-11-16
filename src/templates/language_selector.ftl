<#assign languageUrl = portletURLFactory.create(request, "82", layout.getPlid(), "ACTION_PHASE") />
${languageUrl.setParameter( "struts_action", "/language/view" )}
${languageUrl.setParameter( "redirect", theme_display.getURLCurrent() )}
${languageUrl.setPortletMode( "view" )}
${languageUrl.setWindowState( "normal" )}
<#assign languageText = "Español">
<#assign languageUrltext = "/en/c/portal/update_language?p_l_id=20&redirect=%2Fes%2Fweb%2Fguest%2Fhome&languageId=es_ES">
							
<#if themeDisplay.getLanguageId() == "es_ES" >
  <#assign languageText = "English">
  <#assign languageUrltext = "/es/c/portal/update_language?p_l_id=20&redirect=%2Fes%2Fweb%2Fguest%2Fhome&languageId=en_US">
  								
  ${languageUrl.setParameter( "languageId", "en_US" )}
<#else>
  ${languageUrl.setParameter( "languageId", "es_ES" )}
</#if>
<a href="${languageUrltext}">${languageText}</a> 
<#-- ${theme.language()} -->
<#-- ${theme.runtime("82")} --> 