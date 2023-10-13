routingApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("Home", {
        url: '/',
        templateUrl: "/index.html",
        controller: "homeController"
    }).state("about", {
        url: "/about",
        templateUrl: "/templates/aboutUs.html",
        controller: "aboutControl"
    }).state("contact", {
        url: "/contact",
        templateUrl: "/templates/contact.html",
        controller: "contactControl"
    }).state("pricing", {
        url: "/pricing",
        templateUrl: "/templates/pricing.html",
        controller: "priceControl"
    })

    $urlRouterProvider.otherwise("Home")
})