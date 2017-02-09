angular.module("uiAccordionMod",[]);

angular.module("uiAccordionMod").run(function($templateCache){
  $templateCache.put("view/accordion.html", '<div class="ui-accordion-title" ng-click="open()"> <h3>{{title}}</h3></div><div class="ui-accordion-content" ng-transclude ng-show="isOpened"></div>');
});

angular.module("uiAccordionMod").directive("uiAccordions", function () {
  return {
    controller: function($scope, $element, $attrs){
      var accordions = [];
      this.registerAccordion = function(accordion){
        accordions.push(accordion);
      };

      this.closeAll = function(){
        accordions.forEach(function(accordion){
          accordion.isOpened = false;
        });
      }
    }
  };
});

angular.module("uiAccordionMod").directive("uiAccordion", function () {
  return {
    templateUrl: "view/accordion.html",
    transclude:true,
    scope:{
      title: "@"
    },
    require:"^uiAccordions",
    link: function(scope, element, attrs, ctrl){
      ctrl.registerAccordion(scope);
      scope.open = function(){
        ctrl.closeAll();
        scope.isOpened = !scope.isOpened;
      };
    }
  };
});
