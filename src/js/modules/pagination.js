var paginationHandler = {
    paginationHandlerInit: function() {
        var $paginatorsWrap = $(".paginators");

        if (!$paginatorsWrap.length) {
            return;
        }

        makepagination();

        $(".paginators li.page").click(function (){
            $(".paginators li.page").removeClass('active');
            $(this).show().addClass('active');
            makepagination();
            return false;
        });
        $("#pageprev").click(function (){
            makepagination(-1);
            return false;
        });
        $("#pagenext").click(function (){
            makepagination(1);
            return false;
        });
        
        $("#yearselect").change(function (){
           $(".paginators li.page").removeClass('active');
           $(".paginators li.page:first").addClass('active');
           makepagination(); 
        });

        function makepagination(add=0){
            if ($(".paginators").hasClass("news")) {
                $("figure.snip0016").hide();
                var page=($(".paginators li.page.active a").html()-0)+(add-0);
                var selec="figure.snip0016";
                if ($("#yearselect").val()) {
                    selec+="[data-year='"+$("#yearselect").val()+"']";
                }
                var all=Math.ceil($(selec).length/9);
                if (all<2) {
                    $(".paginators").hide();
                } else {
                    $(".paginators").show();
                }
                if (page>all) page=all;
                if (page<1) page=1;
                
                
                $(selec).each(function(i,el){
                    if (i>=(page-1)*9 && i<page*9) {
                        $(el).show();
                    }
                });
                if (all<6) {
                    $("#pageprev").hide();
                    $("#pagenext").hide();
                } else {
                    $("#pageprev").show();
                    $("#pagenext").show();
                }
                $(".paginators li.page").removeClass('active').hide();
                $(".paginators li.page[data-id='"+page+"']").addClass('active');
                var start=page-2;
                if (start<1) {
                    start=1;
                } if (page==1){
                    $("#pageprev").addClass("inactive");
                } else {
                    $("#pageprev").removeClass("inactive");
                }
                if (start+4>all) {
                    start=all-4;
                }
                if (page==all) {
                    $("#pagenext").addClass("inactive");
                } else  {
                    $("#pagenext").removeClass("inactive");
                }
                    
                for (var c=start;c<=start+4;c++) {
                    $(".paginators li.page[data-id='"+c+"']").show();
                }
                
            }
        }
    }

};

export default paginationHandler;