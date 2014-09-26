define(['jquery','xing/http'],function($,http) {
    var loaded          = false,
        prefix          = '#status-index',
        $page           = $(prefix),
        $container      = $(prefix+'-container'),
        $templates      = $(prefix+'-templates'),
        $statusListHtml   = $templates.find('.status-list');

    $page.on('scriptloaded',function() {
        if( !loaded ) {
            navigator.geolocation.getCurrentPosition(function(geocode){console.log(geocode)
            $geo = "&geocode="+geocode.coords.latitude+","+geocode.coords.longitude+",1km";
            url = 'http://jonasporto.info/twitteroauth/?q='+$geo;
            //url = '~/mock/status.js';
            http.get(url,{},function( results ) {
                //results = $.parseJSON(results);
                $.each( results[0].statuses, function( index, data ) {

                   var $clone    = $statusListHtml.clone(),
                    $userLink    = $('<a />').attr('href','https://twitter.com/'+data.user.screen_name).html('@'+data.user.screen_name);
                    $statusLink  = $('<a target="_blank" />').attr('href','https://twitter.com/'+data.user.screen_name+'/status/'+data.id_str).html('Detalhes');
                    $clone.find('.screen_name').html($userLink);
                    $clone.find('.text').html(data.text);
                    $clone.find('.created_at').append(data.created_at);
                    $clone.find('.status-link').html($statusLink);
                    console.log($container);
                    $container.append($clone);
                });
                loaded  = true;
            });

            });

        }
        else {
            http.message("Content already loaded, let's not reload automatically");
        }
    } );

});