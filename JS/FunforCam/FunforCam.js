/* 引用地址：https://github.com/WeiGiegie/666/blob/main/ffxj.js
/*
 *
 *
脚本功能：方弗相机（恢复购买）
软件版本：1.7.1
下载地址：
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >方弗相机（恢复购买）
^https?:\/\/api.revenuecat.com\/v1\/(receipts|subscribers\/\$RCAnonymousID) url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/ffxj.js

[mitm] 
hostname = api.revenuecat.com
*
*
*/

var body=$response["\u0062\u006f\u0064\u0079"];let obj=JSON["\u0070\u0061\u0072\u0073\u0065"]($response["\u0062\u006f\u0064\u0079"]);obj={"\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u005f\u0064\u0061\u0074\u0065\u005f\u006d\u0073":0x1909d51f118,"\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u005f\u0064\u0061\u0074\u0065":"\u0032\u0030\u0032\u0034\u002d\u0030\u0037\u002d\u0031\u0030\u0054\u0031\u0035\u003a\u0034\u0035\u003a\u0031\u0031\u005a","\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0062\u0065\u0072":{"\u006e\u006f\u006e\u005f\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e\u0073":{},"\u0066\u0069\u0072\u0073\u0074\u005f\u0073\u0065\u0065\u006e":"\u0032\u0030\u0032\u0034\u002d\u0030\u0037\u002d\u0031\u0030\u0054\u0031\u0035\u003a\u0033\u0036\u003a\u0030\u0033\u005a",'original_application_version':"\u0032\u0033\u0039","\u006f\u0074\u0068\u0065\u0072\u005f\u0070\u0075\u0072\u0063\u0068\u0061\u0073\u0065\u0073":{},"\u006d\u0061\u006e\u0061\u0067\u0065\u006d\u0065\u006e\u0074\u005f\u0075\u0072\u006c":'https://apps.apple.com/account/subscriptions',"\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e\u0073":{"\u0063\u006f\u006d\u002e\u0075\u007a\u0065\u0072\u006f\u002e\u0066\u0075\u006e\u0066\u006f\u0072\u0063\u0061\u006d\u002e\u0061\u006e\u0075\u0061\u006c\u0073\u0075\u0062":{"\u006f\u0072\u0069\u0067\u0069\u006e\u0061\u006c\u005f\u0070\u0075\u0072\u0063\u0068\u0061\u0073\u0065\u005f\u0064\u0061\u0074\u0065":"\u0032\u0030\u0032\u0034\u002d\u0030\u0037\u002d\u0031\u0030\u0054\u0031\u0035\u003a\u0034\u0033\u003a\u0031\u0030\u005a","\u0065\u0078\u0070\u0069\u0072\u0065\u0073\u005f\u0064\u0061\u0074\u0065":'2999-09-09T15:43:09Z','is_sandbox':![],"\u0072\u0065\u0066\u0075\u006e\u0064\u0065\u0064\u005f\u0061\u0074":null,'store_transaction_id':'710001704196463',"\u0075\u006e\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0062\u0065\u005f\u0064\u0065\u0074\u0065\u0063\u0074\u0065\u0064\u005f\u0061\u0074":'2024-07-10T15:44:46Z',"\u0067\u0072\u0061\u0063\u0065\u005f\u0070\u0065\u0072\u0069\u006f\u0064\u005f\u0065\u0078\u0070\u0069\u0072\u0065\u0073\u005f\u0064\u0061\u0074\u0065":null,"\u0070\u0065\u0072\u0069\u006f\u0064\u005f\u0074\u0079\u0070\u0065":'trial',"\u0070\u0075\u0072\u0063\u0068\u0061\u0073\u0065\u005f\u0064\u0061\u0074\u0065":"\u0032\u0030\u0032\u0034\u002d\u0030\u0037\u002d\u0031\u0030\u0054\u0031\u0035\u003a\u0034\u0033\u003a\u0030\u0039\u005a","\u0062\u0069\u006c\u006c\u0069\u006e\u0067\u005f\u0069\u0073\u0073\u0075\u0065\u0073\u005f\u0064\u0065\u0074\u0065\u0063\u0074\u0065\u0064\u005f\u0061\u0074":null,"\u006f\u0077\u006e\u0065\u0072\u0073\u0068\u0069\u0070\u005f\u0074\u0079\u0070\u0065":"\u0050\u0055\u0052\u0043\u0048\u0041\u0053\u0045\u0044","\u0073\u0074\u006f\u0072\u0065":'app_store',"\u0061\u0075\u0074\u006f\u005f\u0072\u0065\u0073\u0075\u006d\u0065\u005f\u0064\u0061\u0074\u0065":null}},"\u0065\u006e\u0074\u0069\u0074\u006c\u0065\u006d\u0065\u006e\u0074\u0073":{'ProVersion':{'grace_period_expires_date':null,"\u0070\u0075\u0072\u0063\u0068\u0061\u0073\u0065\u005f\u0064\u0061\u0074\u0065":"\u0032\u0030\u0032\u0034\u002d\u0030\u0037\u002d\u0031\u0030\u0054\u0031\u0035\u003a\u0034\u0033\u003a\u0030\u0039\u005a",'product_identifier':'com.uzero.funforcam.anualsub','expires_date':"\u0032\u0039\u0039\u0039\u002d\u0030\u0039\u002d\u0030\u0039\u0054\u0031\u0035\u003a\u0034\u0033\u003a\u0030\u0039\u005a"}},"\u006f\u0072\u0069\u0067\u0069\u006e\u0061\u006c\u005f\u0070\u0075\u0072\u0063\u0068\u0061\u0073\u0065\u005f\u0064\u0061\u0074\u0065":"\u0032\u0030\u0032\u0034\u002d\u0030\u0037\u002d\u0031\u0030\u0054\u0031\u0035\u003a\u0033\u0035\u003a\u0032\u0035\u005a",'original_app_user_id':'$RCAnonymousID:be4d127d43964399901d291adea4384e',"\u006c\u0061\u0073\u0074\u005f\u0073\u0065\u0065\u006e":"\u0032\u0030\u0032\u0034\u002d\u0030\u0037\u002d\u0031\u0030\u0054\u0031\u0035\u003a\u0033\u0036\u003a\u0030\u0033\u005a"}};$done({"\u0062\u006f\u0064\u0079":JSON['stringify'](obj)});