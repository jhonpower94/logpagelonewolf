var hostNameDomain = window.location.hostname;
$("meta[name='keywords']").attr(
  "content",
  "企业邮箱,登录企业邮箱," + hostNameDomain + ",263企业邮箱"
);
$("meta[name='description']").attr(
  "content",
  "登录" +
    hostNameDomain +
    "企业邮箱，马上体验263企业邮箱专业服务，263企业邮箱为" +
    hostNameDomain +
    "提供安全稳定、数据加密传输、反垃圾专利、超大空间、全球畅邮、邮件百分百送达的企业邮箱服务。"
);
$(document).attr("title", "登录企业邮箱-" + hostNameDomain + "企业邮箱");

try {
  $(function () {
    net263.wm.custom_login.homepage_init(
      "COMMON",
      { server_datetime: 1635187924888, domain: "mail.263.net" },
      {},
      "",
      "mail.263.net"
    );
  });
} catch (e) {}
var GlobalTempNo = null;
var icpCode = "京ICP备08010619号-3";
