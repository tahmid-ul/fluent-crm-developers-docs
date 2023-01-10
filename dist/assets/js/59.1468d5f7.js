(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{483:function(s,t,a){"use strict";a.r(t);var n=a(68),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("explain-block",{attrs:{title:"fluent_crm/unsubscribe_head"}},[a("p",[s._v("This hook fires on Unsubscribe page's "),a("code",[s._v("head")]),s._v(". If you want to add any custom css or head attributes then you can use this hook.\nAnything echo from this hook will be added to "),a("code",[s._v("<head> </head>")]),s._v(" in the page")]),s._v(" "),a("p",[a("strong",[s._v("Parameters")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("$subscriber")]),s._v(" Subscriber Model")]),s._v(" "),a("li",[a("code",[s._v("$campaignEmail")]),s._v(" CampaignEmail Model")])]),s._v(" "),a("p",[a("strong",[s._v("Usage:")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("/*\n* Add Custom CSS for Unsubscribe page\n/*\nadd_action('fluent_crm/unsubscribe_head', function($subscriber, $campaignEmail) {\n   ?>\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[s._v("\n       # your custom css here\n   ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])]),s._v(" "),a("explain-block",{attrs:{title:"fluent_crm/before_unsubscribe_form"}},[a("p",[s._v("This hook fires on Unsubscribe page's before header HTML. If you want to add own HTML at the starting of the page, then you may use this hook.")]),s._v(" "),a("p",[a("strong",[s._v("Parameters")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("$subscriber")]),s._v(" Subscriber Model")]),s._v(" "),a("li",[a("code",[s._v("$campaignEmail")]),s._v(" CampaignEmail Model")])]),s._v(" "),a("p",[a("strong",[s._v("Usage:")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" Add Custom Content "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Unsubscribe page"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'s before default content\n/*\nadd_action('")]),s._v("fluent_crm"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("before_unsubscribe_form'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$subscriber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$campaignEmail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Add your own code here")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])]),s._v(" "),a("explain-block",{attrs:{title:"fluent_crm/before_unsubscribe_form"}},[a("p",[s._v("This hook fires on Unsubscribe page's before header HTML. If you want to add own HTML at the starting of the page, then you may use this hook.")]),s._v(" "),a("p",[a("strong",[s._v("Parameters")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("$subscriber")]),s._v(" Subscriber Model")]),s._v(" "),a("li",[a("code",[s._v("$campaignEmail")]),s._v(" CampaignEmail Model")])]),s._v(" "),a("p",[a("strong",[s._v("Usage:")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" Add Custom Content "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Unsubscribe page"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'s before default content\n/*\nadd_action('")]),s._v("fluent_crm"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("before_unsubscribe_form'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$subscriber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$campaignEmail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Add your own code here")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])]),s._v(" "),a("explain-block",{attrs:{title:"fluent_crm/before_unsubscribe_submit"}},[a("p",[s._v("This hook fires on Unsubscribe page's before submit HTML. If you want to add own HTML before the button, then you may use this hook.")]),s._v(" "),a("p",[a("strong",[s._v("Parameters")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("$subscriber")]),s._v(" Subscriber Model")]),s._v(" "),a("li",[a("code",[s._v("$campaignEmail")]),s._v(" CampaignEmail Model")])]),s._v(" "),a("p",[a("strong",[s._v("Usage:")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" Add Custom Content "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Unsubscribe page"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'s before the button\n/*\nadd_action('")]),s._v("fluent_crm"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("before_unsubscribe_submit'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$subscriber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$campaignEmail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Add your own code here")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])]),s._v(" "),a("explain-block",{attrs:{title:"fluent_crm/after_unsubscribe_content"}},[a("p",[s._v("This hook fires on Unsubscribe page's after the form content.")]),s._v(" "),a("p",[a("strong",[s._v("Parameters")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("$subscriber")]),s._v(" Subscriber Model")]),s._v(" "),a("li",[a("code",[s._v("$campaignEmail")]),s._v(" CampaignEmail Model")])]),s._v(" "),a("p",[a("strong",[s._v("Usage:")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" Add Custom Content "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Unsubscribe page"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'s before the button\n/*\nadd_action('")]),s._v("fluent_crm"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("after_unsubscribe_content'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$subscriber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$campaignEmail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Add your own code here")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])]),s._v(" "),a("explain-block",{attrs:{title:"fluent_crm/unsubscribe_footer"}},[a("p",[s._v("This hook fires on Unsubscribe footer. If you want to add your own content in the page then you may use this hook.")]),s._v(" "),a("p",[a("strong",[s._v("Parameters")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("$subscriber")]),s._v(" Subscriber Model")]),s._v(" "),a("li",[a("code",[s._v("$campaignEmail")]),s._v(" CampaignEmail Model")])]),s._v(" "),a("p",[a("strong",[s._v("Usage:")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" Add Custom content in the unsubscribe page\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add_action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'fluent_crm/unsubscribe_footer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$subscriber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$campaignEmail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$subscriber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Hello '")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$subscriber")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("first_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);