<!DOCTYPE html>

<#include init />

<html class="${root_css_class}" dir="<@liferay.language key="lang.dir" />" lang="${w3c_language_id}">

  <head>
	  <title>${the_title} - ${company_name}</title>
    <meta charset="utf-8">
    <#-- <meta http-equiv="X-UA-Compatible" content="IE=edge">  -->
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
    <meta name="description">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="google-site-verification" content="P_W0CmLI3ie-Eq2GAO78pK450-Z94zQBRck41dPKqoo" />    

	<meta content="initial-scale=1.0, width=device-width" name="viewport" />

	<@liferay_util["include"] page=top_head_include />
</head>

<body class="${css_class}">

<@liferay_ui["quick-access"] contentId="#main-content" />

<@liferay_util["include"] page=body_top_include />

<@liferay.control_menu />

	<noscript>
      <iframe src="//www.googletagmanager.com/ns.html?id=GTM-5QCCRT" height="0" width="0" style="display:none;visibility:hidden">      
      </iframe>
    </noscript>
    <script type="text/javascript">
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&amp;l='+l:'';j.async=true;j.src=
      '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5QCCRT');
    </script>
    
   <div id="fb-root"></div>
    <script>(function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id))
          return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.6";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    </script>

	<!-- BANNER - HEADER -->
	<header id="banner" role="banner">
		<#include "${full_templates_path}/navigation_html.ftl" />
  </header>	
	<!-- BANNER - HEADER -->		
  <div class="container-fluid mt-0 pt-0 px-0" id="wrapper">	
	<!-- SECTION HOME -->
      <section class="sectionHome" id="content">
        <#if clase_pagina != "home">
          <#include "${full_templates_path}/header_internas.ftl" />
          <div class="container">
        </#if>				
		
				<#if selectable>
					<@liferay_util["include"] page=content_include />
				<#else>
					${portletDisplay.recycle()}
		
					${portletDisplay.setTitle(the_title)}
		
					<@liferay_theme["wrap-portlet"] page="portlet.ftl">
						<@liferay_util["include"] page=content_include />
					</@>
				</#if>
        <#if clase_pagina != "homme">
          </div>
        </#if>
      </section>

      <#include "${full_templates_path}/footer.ftl" />
</div>

<@liferay_util["include"] page=body_bottom_include />

<@liferay_util["include"] page=bottom_include />

  <script src="${javascript_folder}/vendor/jquery.bxslider.min.js"></script>
  <script src="${javascript_folder}/sostenibilidad_shuffle.js"></script>
  <script src="${javascript_folder}/vendor/bjqs.min.js"></script>    
  <script src="${javascript_folder}/vendor/hammer.min.js"></script>
  <script src="${javascript_folder}/vendor/salvattore.min.js"></script>
  <script src="${javascript_folder}/vendor/jquery.colorbox-min.js"></script>
  <script src="${javascript_folder}/vendor/jquery.zoom.min.js"></script>
  <script src="${javascript_folder}/vendor/jquery.paginate.js"></script>
  <script src="${javascript_folder}/vendor/api.js"></script>
  <script src="${javascript_folder}/vendor/sc-player.js"></script>
  <script src="${javascript_folder}/vendor/jquery.slides.js"></script>
  
  <script src="${javascript_folder}/controller.js"></script>
  <script src="${javascript_folder}/main_front.js"></script>
  
  
  <script src="${javascript_folder}/controller.js"></script>

</body>

</html>