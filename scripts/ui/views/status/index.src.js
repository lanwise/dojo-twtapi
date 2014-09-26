define(['jquery','xing/http'],function($,http) {
    var loaded          = false,
        prefix          = '#status-index',
        $page           = $(prefix),
        $container      = $(prefix+'-container'),
        $templates      = $(prefix+'-templates'),
        $statusListHtml   = $templates.find('.status-list');

    $page.on('scriptloaded',function() {
        if( !loaded ) {
            http.get('~/mock/status.js',{},function( results ) {
                
                
                results = $.parseJSON(results);
                $.each( results[0].statuses, function( index, data ) {
                console.log(data.user.name);
                   var $clone      = $statusListHtml.clone(),
                        $emailLink  = $('<a />').attr('href','http://twitter.com/'+data.user.screen_name).html(data.user.screen_name);

                    $clone.find('.username').html(data.user.name);
                    $clone.find('.email').append($emailLink);
                    /*$clone.find('.fullname').html(data.FirstName+' '+user.MiddleName+' '+user.LastName);
                    $clone.find('.user-link').data('target','#!/user/view?id='+user.Id);*/
                    $container.append($clone);
                });
                loaded  = true;
            });
        }
        else {
            http.message("already loaded, let's not reload automatically");
        }
    } );

});