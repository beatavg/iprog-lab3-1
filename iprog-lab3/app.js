$(function() {

	var model = new DinnerModel();
	//homepage
	var homepageView = new HomePageView($("#homepageView"), model);
	var homepageController = new HomePageController(homepageView, model, this);

	var sidebarView = new SidebarView($("#leftPanel"), model);
	var sidebarController = new SidebarController(sidebarView, model, this);

	var selectDishView = new SelectDishView($("#searchCointainer"), model);
	var selectDishController = new SelectDishController(selectDishView, model, this);

	var showDishView = new ShowDishView($("#showDish"), model);
	var showDishController = new ShowDishController(showDishView, sidebarView, model, this);

	var overView = new OverView($("#overView"), model);
	var overViewController = new OverViewController(overView, model, this);

	var printoutView = new PrintOutView($("#printoutView"), model);
	var printoutController = new PrintoutController(printoutView, model, this);




	this.showSelectDish = function(){
		$("#header1").hide();
		$("#homepageView").hide();
		$("#preparation").hide();
		$("#showDish").hide();
		$("#ingredientsBox").hide();
		$("#overViewDishes").hide();
		$("#overView").hide();
		$("#overViewFooter").hide();
		$("#header2").show();
		$("#header").show();
		$("#sidebar").show();
		$("#selectedDishes").show();
		$("#searchCointainer").show();
		$("#searchHeader").show();
		$("#searchresults").show();


		$("body").css({"background": "none"});
	}

	this.showShowDish = function(){
		$("#searchresults").hide();
		$("#searchHeader").hide();
		$("#overView").hide();
		$("#overViewDishes").hide();
		$("#overViewFooter").hide();
		$("#preparation").show();
		$("#showDish").show();
		$("#ingredientsBox").show();

	}

		this.showOverView = function(){
		$("#sidebar").hide();
		$("#searchCointainer").hide();
		$("#showDish").hide();
		$("#searchresults").hide();
		$("#preparation").hide();
		$("#ingredientsBox").hide();
		$("#overViewDishes").show();
		$("#overView").show();
		$("#overViewFooter").show();

	}

	 	this.showPrintOut =function(){
 		$("#homepageView").hide();
 		$("#overViewDishes").hide();
		$("#overView").hide();
		$("#overViewFooter").hide();
 		$("#printoutHeader").show();
 		$("#printoutView").show();
 	}




});