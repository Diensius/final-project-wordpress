!function(f){f(function(){var o=window.location.href,a=void 0!==document.title?document.title:"",n=void 0!==screen.width&&1024<screen.width?"no":"yes",_="",c={};function e(t,e){c[t]=e;e=JSON.stringify(c);localStorage.setItem("ht_ctc_storage",e)}localStorage.getItem("ht_ctc_storage")&&(c=localStorage.getItem("ht_ctc_storage"),c=JSON.parse(c));var t,i="";if("undefined"!=typeof ht_ctc_chat_var)i=ht_ctc_chat_var,s(),r();else{try{document.querySelector(".ht_ctc_chat_data")&&(t=f(".ht_ctc_chat_data").attr("data-settings"),i=JSON.parse(t))}catch(t){i={}}s(),r()}function s(){var t=document.querySelector(".ht_ctc_chat_data");t&&(_=f(".ht_ctc_chat_data").attr("data-no_number"),t.remove())}function r(){var e;document.dispatchEvent(new CustomEvent("ht_ctc_event_settings",{detail:{ctc:i}})),(e=document.querySelector(".ht-ctc-chat"))&&(document.dispatchEvent(new CustomEvent("ht_ctc_event_chat")),function(t){"yes"==i.schedule?document.dispatchEvent(new CustomEvent("ht_ctc_event_display",{detail:{ctc:i,display_chat:l,ht_ctc_chat:t}})):l(t)}(e),e.addEventListener("click",function(){f(".ht_ctc_chat_greetings_box").length||p(e)}),f(".ht_ctc_chat_greetings_box").length&&f(document).on("click",".ht_ctc_chat_style",function(t){f(".ht_ctc_chat_greetings_box").hasClass("ctc_greetings_opened")?u("user_closed"):d("user_opened")}),f(document).on("click",".ctc_greetings_close_btn",function(t){u("user_closed")}),f(document).on("click",".ht_ctc_chat_greetings_box_link",function(t){t.preventDefault(),p(e),document.dispatchEvent(new CustomEvent("ht_ctc_event_greetings"))})),f(document).on("click",".ht-ctc-sc-chat",function(){var t=this.getAttribute("data-number"),e=(e=this.getAttribute("data-pre_filled")).replace(/\[url]/gi,o);e=encodeURIComponent(e),i.web&&"yes"!==n?window.open("https://web.whatsapp.com/send?phone="+t+"&text="+e,"_blank","noopener"):window.open("https://wa.me/"+t+"?text="+e,"_blank","noopener"),v(this),m(t)}),f(document).on("click",".ctc_chat, #ctc_chat",function(t){p(this),f(this).hasClass("ctc_woo_place")&&t.preventDefault()}),f(document).on("click",'[href="#ctc_chat"]',function(t){t.preventDefault(),p(this)})}function h(){if(f(".ht_ctc_chat_greetings_box").length){if(i.g_device){if("yes"!==n&&"mobile"==i.g_device)return void f(".ht_ctc_chat_greetings_box").remove();if("yes"==n&&"desktop"==i.g_device)return void f(".ht_ctc_chat_greetings_box").remove()}document.dispatchEvent(new CustomEvent("ht_ctc_event_after_chat_displayed",{detail:{ctc:i,greetings_open:d,greetings_close:u}})),i.g_init&&"open"==i.g_init&&"user_closed"!==(c["g_user_action"]||!1)&&d("init"),f(document).on("click",".ctc_greetings, #ctc_greetings",function(t){u("element"),d("element")})}}function d(t){f(".ctc_cta_stick").remove(),f(".ht_ctc_chat_greetings_box").show(70),f(".ht_ctc_chat_greetings_box").addClass("ctc_greetings_opened").removeClass("ctc_greetings_closed"),e("g_action",t),"user_opened"==t&&e("g_user_action",t)}function u(t){f(".ht_ctc_chat_greetings_box").hide(70),f(".ht_ctc_chat_greetings_box").addClass("ctc_greetings_closed").removeClass("ctc_greetings_opened"),e("g_action",t),"user_closed"==t&&e("g_user_action",t)}function l(t){var e;"yes"==n?"show"==i.dis_m&&((e=document.querySelector(".ht_ctc_desktop_chat"))&&e.remove(),t.style.cssText=i.pos_m+i.css,g(t)):"show"==i.dis_d&&((e=document.querySelector(".ht_ctc_mobile_chat"))&&e.remove(),t.style.cssText=i.pos_d+i.css,g(t))}function g(e){try{f(e).show(parseInt(i.se))}catch(t){e.style.display="block"}var t,c;h(),c=f(t=e).hasClass("ht_ctc_entry_animation")?1200:120,setTimeout(function(){t.classList.add("ht_ctc_animation",i.ani)},c),f(".ht-ctc-chat").hover(function(){f(".ht-ctc-chat .ht-ctc-cta-hover").show(120)},function(){f(".ht-ctc-chat .ht-ctc-cta-hover").hide(100)})}function v(t){document.dispatchEvent(new CustomEvent("ht_ctc_event_analytics"));var e=i.number;t.classList.contains("ht-ctc-sc")&&(e=t.getAttribute("data-number"));var c="Click to Chat for WhatsApp",n="chat: "+e,t=a+", "+o;(i.ga||i.ga4)&&("undefined"!=typeof gtag?i.ga4?gtag("event","click to chat",{number:e,title:a,url:o}):gtag("event",n,{event_category:c,event_label:t}):"undefined"!=typeof ga&&void 0!==ga.getAll?ga.getAll()[0].send("event",c,n,t):"undefined"!=typeof __gaTracker&&__gaTracker("send","event",c,n,t)),"undefined"!=typeof dataLayer&&dataLayer.push({event:"Click to Chat",type:"chat",number:e,title:a,url:o,event_category:c,event_label:t,event_action:n}),i.ads&&"undefined"!=typeof gtag_report_conversion&&gtag_report_conversion(),i.fb&&"undefined"!=typeof fbq&&fbq("trackCustom","Click to Chat by HoliThemes",{Category:"Click to Chat for WhatsApp",return_type:"chat",ID:e,Title:a,URL:o})}function p(t){document.dispatchEvent(new CustomEvent("ht_ctc_event_number",{detail:{ctc:i}}));var e=i.number,c=i.pre_filled;t.hasAttribute("data-number")&&(e=t.getAttribute("data-number")),t.hasAttribute("data-pre_filled")&&(c=t.getAttribute("data-pre_filled")),c=c.replace(/\[url]/gi,o),c=encodeURIComponent(c),""!=e?(i.web&&"yes"!==n?window.open("https://web.whatsapp.com/send?phone="+e+"&text="+c,"_blank","noopener"):window.open("https://wa.me/"+e+"?text="+c,"_blank","noopener"),v(t),m(e)):f(".ht-ctc-chat").html(_)}function m(t){var e,c;i.hook_url&&(e=i.hook_url,c={},i.hook_v&&(c=i.hook_v),document.dispatchEvent(new CustomEvent("ht_ctc_event_hook",{detail:{ctc:i,number:t}})),e=i.hook_url,c=i.hook_v,data=JSON.stringify(c),f.ajax({url:e,type:"POST",mode:"no-cors",data:data,success:function(t){}}))}})}(jQuery);