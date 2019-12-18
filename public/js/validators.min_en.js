/** 2017-09-22 */
function isCode(t){return/^[a-zA-Z0-9]{1}[a-zA-Z0-9\-]*[a-zA-Z0-9]{1}$/.test(t)}function isPassword(t,e){"undefined"==typeof e&&(e=6);var i=new RegExp("^.{"+e+",}$");return!/\s+$/.test(t)&&i.test(t)}function isNeedle(t){return isText(t)&&t.length>2}function isText(t){return t=t.replace(/&lt;/g,"<").replace(/&gt;/g,">"),!/(<\/?\s*(javascript|script|onmouseover|onmousedown|onclick)\b.*?>)/i.test(t)}function isRichText(t){return t=t.replace(/&lt;/g,"<").replace(/&gt;/g,">"),!/(<\/?\s*(javascript|script|onmouseover|onmousedown|onclick)\b.*?>)/i.test(t)}function isPlainText(t){return/^[^<>]+$/.test(t)}function isTinyMceText(t){return isText(tinymce.get(t).getContent())}function isSlug(t){return/^[a-z]{1}[a-z\-]*$/.test(t)}function isIdentifier(t){return/^[a-zA-Z_]{1}[a-zA-Z0-9_]*$/.test(t)}function isCustomComboBox(t){return $("#"+t).parents(".ui-widget").find(".custom-combobox-input").val()?!0:!1}function isLetter(t){return/^[a-zA-ZáéíóúñÁÉÍÓÚÑ]+$/.test(t)}function isAlpha(t){return/^[a-zA-Z]+$/.test(t)}function isLower(t){return/^[a-z]+$/.test(t)}function isAlphaNumeric(t){return/^[0-9a-zA-Z]+$/.test(t)}function isPositive(t){return/^[1-9]{1}[0-9]*$/.test(t)}function isInteger(t){return/^-?[0-9]+$/.test(t)}function isZeroOrPositive(t){return/^[0-9]+$/.test(t)}function isFloat(t){return/^(\-)?[0-9]+(\.)?([0-9]+)?$/.test(t)}function isZipCode(t){return/^[1-9]{1}[0-9]{4}(\-[0-9]{4})?$/.test(t)}function isPostalCode(t){return/^[0-9a-zA-Z_\s\-]+$/.test(t)}function isPersonName(t){return/^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s\-\'\.]+$/.test(t)}function isPhone(t){return/^[0-9\(\)\-\. ]+$/.test(t)}function isInstagram(t){return/^[a-zA-Z]{1}[0-9a-zA-Z_\-]+$/.test(t)}function isAddress(t){return/^[0-9a-zA-ZáéíóúñÁÉÍÓÚÑ\s_,\-\.#\%]+$/.test(t)}function isLocation(t){return/^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s_,\-]+$/.test(t)}function isTime(t){return/^[0-9]{1,2}:[0-9]{2}(:[0-9]{2})?( (am|pm|AM|PM))?$/.test(t)}function isUrl(t){return/^(ftp|https|http):\/\/(www\.)?[a-zA-Z0-9\-\.]{3,}\.[a-z]{2,3}((\/|\?)[_a-zA-Z0-9#!:\.?+=&%@!\-\/]*)*$/.test(t)}function isRelativeUrl(t){return/^(\/)?[a-zA-Z0-9\-\.\/]+$/.test(t)}function isUrlSegment(t){return/^[a-zA-Z]{1}[a-zA-Z0-9_\-]+$/.test(t)}function isFriendlyUrlSegments(t){return/^[a-zA-Z]{1}[a-zA-Z0-9_\-\/]+$/.test(t)}function isSubdomain(t){return/^[a-zA-Z]{1}[a-zA-Z0-9_\-]+$/.test(t)}function isCustomUrlSegment(t){return/^[a-zA-Z]{1}[a-zA-Z0-9_\-]+$/.test(t)}function isVideoId(t){return/^[a-zA-Z1-9]{1}[a-zA-Z0-9_\-]+$/.test(t)}function isIntPercent(t){return/^(([1-9]{1}[0-9]{0,1})|(100{1}))\s*%{0,1}$/.test(t)}function isISODate(t){return/^[0-9]{2,4}\-(([1-9])|(0[1-9])|(1[0-2]))\-|(([1-9])|(0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(t)}function isUSDate(t){return/^(([1-9])|(0[1-9])|(1[0-2]))\/(([1-9])|([0-2][0-9])|(3[0-1]))\/[0-9]{2,4}$/.test(t)}function isUSDateRange(t){var e=t.split(" - ");return 2==e.length&&isUSDate(e[0])&&isUSDate(e[1])}function isSPDate(t){return/^(([1-9])|(0[1-9])|([1-2][0-9])|(3[0-1]))\-(([1-9])|(0[1-9])|(1[0-2]))\-[0-9]{2,4}$/.test(t)}function isSPDateRange(t){var e=t.split(" - ");return 2==e.length&&isSPDate(e[0])&&isSPDate(e[1])}function isISODateTime(t){return/^[0-9]{2,4}(\-|\/)(([1-9])|(0[1-9])|(1[0-2]))(\-|\/)(([1-9])|(0[1-9])|([1-2][0-9])|(3[0-1])) [0-9]{1,2}:[0-9]{2}(:[0-9]{2})?( (am|pm|AM|PM))?$/.test(t)}function isUSDateTime(t){return/^(([1-9])|(0[1-9])|(1[0-2]))(\-|\/)(([1-9])|([0-2][0-9])|(3[0-1]))(\-|\/)[0-9]{2,4} [0-9]{1,2}:[0-9]{2}(:[0-9]{2})?( (am|pm|AM|PM))?$/.test(t)}function isSPDateTime(t){return/^(([1-9])|([0-2][0-9])|(3[0-1]))(\-|\/)(([1-9])|(0[1-9])|(1[0-2]))(\-|\/)[0-9]{2,4} [0-9]{1,2}:[0-9]{2}(:[0-9]{2})?( (am|pm|AM|PM))?$/.test(t)}function isCurrency(t){return/^(0\.)?\d+(\.\d{1,2})?$/.test(t)}function isBoolean(t){return/^(on|off|true|false|1|0)$/.test(t)}function isPhoneNumber(t){return/^[0-9\(\)\[\]\-\.\s\+]+$/.test(t)}function htmlEncode(t){return t.replace(/[\u00A0-\u9999<>\&]/gim,function(t){return"&#"+t.charCodeAt(0)+";"})}function isEmail(t){return/^[a-zA-Z0-9_\.\-]+@([a-zA-Z0-9\-]+\.)+[a-zA-Z]+$/.test(t)}function cleanHTML(t){return t.replace(/<([^>]*?)>/g,"")}function isSummernoteEmpty(t){return html=t.code(),html=html.replace(/<([^>]*?)>/g,"").replace(/(&nbsp;|\s)*/g,""),""==html}function getSummernoteText(t){return isSummernoteEmpty(t)?"":t.code()}function setSummernoteValueOnHiddenField(t){var e=t.attr("data-target");$("#"+e).size()||t.append('<input type="hidden" class="summer-note-hidden-input" id="'+e+'" name="'+e+'" value="" />'),$("#"+e).val(getSummernoteText(t))}function alertSummerNotesBeforeSubmit(){$(".summer-note-hidden-input").remove();var t,e,i=[];return $(".summer-note").each(function(){e=getSummernoteText($(this)),$(this).attr("aria-required")&&"required"!=$(this).attr("aria-required")&&"true"!=$(this).attr("aria-required")?""==e||isText(e)?(t=$(this).attr("data-target"),$(this).append('<input type="hidden" class="summer-note-hidden-input" id="'+t+'" name="'+t+'" value="" />'),$("#"+t).val(e)):i.push("<li>"+$(this).attr("data-title")+"</li>"):""!=e&&isText(e)?(t=$(this).attr("data-target"),$(this).append('<input type="hidden" class="summer-note-hidden-input" id="'+t+'" name="'+t+'" value="" />'),$("#"+t).val(e)):i.push("<li>"+$(this).attr("data-title")+"</li>")}),i.length>0?($(".summer-note-hidden-input").remove(),{success:!1,message:"Invalid and/or missing text on fields:<br><ul>"+i.join(" ")+"<ul>"}):{success:!0}}function validateSummerNotesBeforeSubmit(t){form="FORM"==t.prop("tagName")?t:t.parents("form"),form.find(".summer-note-hidden-input").remove(),form.find("em.state-error").remove(),form.find(".state-error").removeClass("state-error");var e=!0;return form.find(".summer-note").each(function(){validateSummernote($(this))||(e=!1)}),e}function validateSummernote(t){var e,i=t.parents(".summernote-container"),n=!1,r=getSummernoteText(t);return t.attr("aria-required")&&"required"!=t.attr("aria-required")&&"true"!=t.attr("aria-required")?""==r||isText(r)?(e=t.attr("data-target"),t.append('<input type="hidden" class="summer-note-hidden-input" id="'+e+'" name="'+e+'" value="" />'),$("#"+e).val(r),n=!0):(n=!1,i.addClass("state-error"),i.find(".note-editor").after('<em class="state-error" id="'+t.attr("data-target")+'-error">Invalid text.</em>')):""!=r&&isText(r)?(e=t.attr("data-target"),t.append('<input type="hidden" class="summer-note-hidden-input" id="'+e+'" name="'+e+'" value="" />'),$("#"+e).val(r),n=!0):(n=!1,i.addClass("state-error"),""==r?i.after('<em class="state-error" id="'+t.attr("data-target")+'">This field is required.</em>'):i.after('<em class="state-error" id="'+t.attr("data-target")+'">Invalid text.</em>')),n}function validateMultiComboBoxBeforeSubmit(t){form="FORM"==t.prop("tagName")?t:t.parents("form"),form.find("em.state-error").remove(),form.find(".state-error").removeClass("state-error");var e=!0;return form.find(".multi-combobox").each(function(){var t=$(this).parents(".multi-combobox-container");$(this).val()||$(this).attr("aria-required")&&"required"!=$(this).attr("aria-required")&&"true"!=$(this).attr("aria-required")||(e=!1,t.addClass("state-error"),t.find("button.multiselect").after('<em class="state-error" id="'+$(this).attr("id")+'">This field is required.</em>'))}),e}function validateMceBeforeSubmit(t){var e=("FORM"==t.prop("tagName")?t:t.parents("form"),tinymce.editors),i=!0;return $.each(e,function(t,e){var n=$("#"+e.id).parents(".mce-wrapper"),r=(n.find(".mce-tinymce.mce-container.mce-panel"),$("#"+e.id)),a=e.getContent();n.removeClass("state-error").removeClass("error-empty").removeClass("error-invalid"),r.data("required")&&""==a?(i=!1,n.removeClass("error-invalid").addClass("state-error error-empty")):isText(a)||(i=!1,n.removeClass("error-empty").addClass("state-error error-invalid"))}),i}$(function(){$.validator.addMethod("usDateRange",function(t,e){return this.optional(e)||isUSDateRange(t)},"Invalid date range"),$.validator.addMethod("spDateRange",function(t,e){return this.optional(e)||isSPDateRange(t)},"Invalid date range"),$.validator.addMethod("code",function(t,e){return this.optional(e)||isCode(t)},"Invalid code"),$.validator.addMethod("address",function(t,e){return this.optional(e)||isAddress(t)},"Invalid address"),$.validator.addMethod("city",function(t,e){return this.optional(e)||isLocation(t)},"Invalid city"),$.validator.addMethod("state",function(t,e){return this.optional(e)||isLocation(t)},"Invalid state"),$.validator.addMethod("location",function(t,e){return this.optional(e)||isLocation(t)},"Invalid location"),$.validator.addMethod("postalCode",function(t,e){return this.optional(e)||isPostalCode(t)},"Invalid postal code"),$.validator.addMethod("float",function(t,e){return this.optional(e)||isFloat(t)},"Invalid entry."),$.validator.addMethod("needle",function(t,e){return this.optional(e)||isNeedle(t)},"Invalid entry."),$.validator.addMethod("smartCaptcha",function(t,e,i){return t==i},"Incorrect verification code."),$.validator.addMethod("text",function(t,e){return this.optional(e)||isText(t)},"Invalid text."),$.validator.addMethod("plainText",function(t,e){return this.optional(e)||isPlainText(t)},"This field cannot contain html tags."),$.validator.addMethod("mceText",function(t,e){return this.optional(e)||isTinyMceText(e)},"Invalid text."),$.validator.addMethod("lower",function(t,e){return this.optional(e)||isLower(t)},"Only lowercase letters are allowed."),$.validator.addMethod("letter",function(t,e){return this.optional(e)||isLetter(t)},"Only letters are allowed."),$.validator.addMethod("slug",function(t,e){return this.optional(e)||isSlug(t)},"Only lowercase letters and dash are allowed."),$.validator.addMethod("identifier",function(t,e){return this.optional(e)||isIdentifier(t)},"Only letters, numbers and underscore are allowed."),$.validator.addMethod("personName",function(t,e){return this.optional(e)||isPersonName(t)},"Invalid person name."),$.validator.addMethod("firstName",function(t,e){return this.optional(e)||isPersonName(t)},"Invalid first name."),$.validator.addMethod("lastName",function(t,e){return this.optional(e)||isPersonName(t)},"Invalid last name."),$.validator.addMethod("fullUrl",function(t,e){return this.optional(e)||isUrl(t)},"Invalid url."),$.validator.addMethod("relativeUrl",function(t,e){return this.optional(e)||isRelativeUrl(t)},"Invalid relative url."),$.validator.addMethod("friendlyUrlSegments",function(t,e){return this.optional(e)||isFriendlyUrlSegments(t)},"Invalid url."),$.validator.addMethod("urlSegment",function(t,e){return this.optional(e)||isUrlSegment(t)},"Invalid url segment."),$.validator.addMethod("subdomain",function(t,e){return this.optional(e)||isSubdomain(t)},"Invalid subdomain."),$.validator.addMethod("customUrlSegment",function(t,e){return this.optional(e)||isCustomUrlSegment(t)},"Invalid custom url segment."),$.validator.addMethod("videoId",function(t,e){return this.optional(e)||isVideoId(t)},"Invalid video id."),$.validator.addMethod("positive",function(t,e){return this.optional(e)||isPositive(t)},"This is not a positive number."),$.validator.addMethod("zeroOrPositive",function(t,e){return this.optional(e)||isZeroOrPositive(t)},"This is not zero or a positive number."),$.validator.addMethod("password",function(t,e){return this.optional(e)||isPassword(t)},"Invalid entry."),$.validator.addMethod("isoDate",function(t,e){return this.optional(e)||isISODate(t)},"Valid format is Y-m-d"),$.validator.addMethod("usDate",function(t,e){return this.optional(e)||isUSDate(t)},"Valid format is m/d/Y"),$.validator.addMethod("isoDateTime",function(t,e){return this.optional(e)||isISODateTime(t)},"Valid format is Y-m-d H:i:s"),$.validator.addMethod("usDateTime",function(t,e){return this.optional(e)||isUSDateTime(t)},"Valid format is m/d/Y H:i:s"),$.validator.addMethod("spDate",function(t,e){return this.optional(e)||isSPDate(t)},"Valid format is d-m-Y"),$.validator.addMethod("spDateTime",function(t,e){return this.optional(e)||isSPDateTime(t)},"El formato v&aacute;lido es d-m-Y H|h:i:s am|pm"),$.validator.addMethod("currency",function(t,e){return this.optional(e)||isCurrency(t)},"Invalid currency value"),$.validator.addMethod("boolean",function(t,e){return this.optional(e)||isBoolean(t)},"Invalid boolean value"),$.validator.addMethod("phone",function(t,e){return this.optional(e)||isPhoneNumber(t)},"Invalid phone number")});