define(['jquery','../../../xing/hash','xing/http'],function($,hash,http) {
    var lastId          = null,
        prefix          = '#status-view',
        $page           = $(prefix),
        $templates      = $(prefix+'-templates'),
        $userHtml       = $templates.find('.status-details');

    $page.on('scriptloaded',function() {
        var currentId   = hash.get('id');
        if( currentId != lastId ) {
            http.get('~/mock/status.js',{},function( results ) {
                results = $.parseJSON(results);
                
                $.each( results[0].statuses, function( index, data ) {
                    if( data.Id == currentId ) {
                        var $clone      = $userHtml.clone(),
                            $emailLink  = $('<a />').attr('href','mailto:'+user.Email).html(user.Email);

                        $clone.find('.userid').html(user.Id);
                        $clone.find('.username').html(user.Username);
                        $clone.find('.fullname').html(user.FirstName+' '+user.MiddleName+' '+user.LastName);
                        $clone.find('.email').append($emailLink);
                        $page.html($clone);
                    }
                });
            } );
            lastId      = currentId;
        }
        else {
            http.message("This user is already loaded, so we didn't reload it.");
        }
    } );

});