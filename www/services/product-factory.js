// Factory - policyFactory
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
ifameApp.factory('productFactory', [
    'appConstants', 'appGlobals', 'httpFactory',
    function(appConstants, appGlobals, httpFactory) {
        var self = this;
        var factory = {};
        //
        factory.getProducts = function() {
            return [{
                PLANNAME: "All Products",
                PLANTYPE: "All",
                TAXSAVE: "Mixed",
                ONLINE: "-",
                IMGPATH: "img/prd-mix1140.jpg",
                WEBPATH: "http://www.philliplife.com/products"
            }, {
                PLANNAME: "Pro Saving (10/5)",
                PLANTYPE: "Endownment",
                TAXSAVE: "TAX SAVING",
                ONLINE: "-",
                IMGPATH: "img/prd-prosaving105.jpg",
                WEBPATH: "http://www.philliplife.com/products/pro-saving-10-5/"
            }, {
                PLANNAME: "Pro Saving (10/3)",
                PLANTYPE: "Endownment",
                TAXSAVE: "TAX SAVING",
                ONLINE: "-",
                IMGPATH: "img/prd-prosaving103.jpg",
                WEBPATH: "http://www.philliplife.com/products/pro-saving-103/"
            }, {
                PLANNAME: "Happy Life 2 (90/7, 90/10, 90/20)",
                PLANTYPE: "WholeLife",
                TAXSAVE: "TAX SAVING",
                ONLINE: "-",
                IMGPATH: "img/prd-happylife2.jpg",
                WEBPATH: "http://www.philliplife.com/products/happy-life-2/"
            }, {
                PLANNAME: "Happy Life Single (90/1)",
                PLANTYPE: "SinglePremium",
                TAXSAVE: "TAX SAVING",
                ONLINE: "-",
                IMGPATH: "img/prd-happylifesingle901.jpg",
                WEBPATH: "http://www.philliplife.com/products/happylifesingle901/"
            }, {
                PLANNAME: "Happy Protection (99/20)",
                PLANTYPE: "WholeLife",
                TAXSAVE: "TAX SAVING",
                ONLINE: "-",
                IMGPATH: "img/prd-happyprotect9920.jpg",
                WEBPATH: "http://www.philliplife.com/products/happy-protection-9920/"
            }, {
                PLANNAME: "Prestige Saving (15/5, 20/5)",
                PLANTYPE: "Endownment",
                TAXSAVE: "TAX SAVING",
                ONLINE: "-",
                IMGPATH: "img/prd-prestigesaving.jpg",
                WEBPATH: "http://www.philliplife.com/products/prestige-saving/"
            }, {
                PLANNAME: "SarnPhan (89/19)",
                PLANTYPE: "Wholelife",
                TAXSAVE: "TAX SAVING",
                ONLINE: "-",
                IMGPATH: "img/prd-sarnphan8919.jpg",
                WEBPATH: "http://www.philliplife.com/products/sanphan8919/"
            }, {
                PLANNAME: "SarnPhan WaiSai (90/7, 90/10)",
                PLANTYPE: "Wholelife",
                TAXSAVE: "TAX SAVING",
                ONLINE: "-",
                IMGPATH: "img/prd-sarnphanwaisai.jpg",
                WEBPATH: "http://www.philliplife.com/products/sarn-phan-wai-sai/"
            }, {
                PLANNAME: "Special Endownment (20/15)",
                PLANTYPE: "Endownment",
                TAXSAVE: "TAX SAVING",
                ONLINE: "-",
                IMGPATH: "img/prd-specialendown2015.jpg",
                WEBPATH: "http://www.philliplife.com/products/special-endowment/"
            }, {
                PLANNAME: "Smart Saving (5/1)",
                PLANTYPE: "Single Premium",
                TAXSAVE: "NO",
                ONLINE: "-",
                IMGPATH: "img/prd-smartsaving51.jpg",
                WEBPATH: "http://www.philliplife.com/products/smart-saving-51/"
            }, {
                PLANNAME: "Wonderful Saving 2 (18/18)",
                PLANTYPE: "Endownment",
                TAXSAVE: "TAX SAVING",
                ONLINE: "-",
                IMGPATH: "img/prd-wonderfulsaving2.jpg",
                WEBPATH: "http://www.philliplife.com/products/wonderful-saving-2/"
            }, {
                PLANNAME: "Wonderful Saving 1 (20/20)",
                PLANTYPE: "Endownment",
                TAXSAVE: "TAX SAVING",
                ONLINE: "-",
                IMGPATH: "img/prd-wonderfulsaving1.jpg",
                WEBPATH: "http://www.philliplife.com/products/wonderful-saving-1/"
            }, {
                PLANNAME: "Pitaksub (Term-Life)",
                PLANTYPE: "TERM",
                TAXSAVE: "VARY",
                ONLINE: "-",
                IMGPATH: "img/prd-pitaksub.jpg",
                WEBPATH: "http://www.philliplife.com/products/pitaksub/"
            }, {
                PLANNAME: "Dividend+ 2 (10/10,15/15/20/20)",
                PLANTYPE: "Endownment",
                TAXSAVE: "TAX SAVING",
                ONLINE: "-",
                IMGPATH: "img/prd-dividendplus2.jpg",
                WEBPATH: "http://www.philliplife.com/products/dividend-plus-2/"
            }, {
                PLANNAME: "Dividend+ 1 (10/10,15/15/20/20)",
                PLANTYPE: "Endownment",
                TAXSAVE: "TAX SAVING",
                ONLINE: "-",
                IMGPATH: "img/prd-dividendplus1.jpg",
                WEBPATH: "http://www.philliplife.com/products/dividend-plus-1/"
            }, {
                PLANNAME: "Suk BamNan (90/60)",
                PLANTYPE: "WholeLife",
                TAXSAVE: "TAX SAVING",
                ONLINE: "-",
                IMGPATH: "img/prd-sukbamnan9060.jpg",
                WEBPATH: "http://www.philliplife.com/products/sukbamnan9060/"
            }];
        };
        //
        return factory;
    }
]);