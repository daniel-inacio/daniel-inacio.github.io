<script type="text/javascript">
	 $(document).ready(function(){	
		   $('#Add_album').validationEngine({
					ajaxFormValidation: true,
					onBeforeAjaxFormValidation: Add_album
			});		
			$('.albumsubmit').click(function(){
						var form_id=$(this).parents('form').attr('id');
						$("#"+form_id).submit();
			})		 
	  }); 
	 
	function Add_album(form, options){
		 loading('Loading',0);
		 var data=form.serialize();		
		$.ajax({
			url: "gallery/addAlbum.php",
			data: data,
			success: function(data){	

				  if(data.check==0){ 
					  $('#preloader').fadeOut(400,function(){ $(this).remove(); });		
					  showError('Error : Sorry you can add agian');
					   return false;
				  }
				  if(data.check==1){
					 // alert(data.check);
					  $("#albumsLoad").load('gallery/loadAlbum.php',function(){
						 unloading();	
						 setTimeout('$.fancybox.close()',500); 
					  });	
				  }
			},
			cache: false,
			type: "POST",
			dataType: 'json'
		});
	}
</script>   
<div class="modal_dialog" style="min-height:50px">
  <div class="header">
  	  <span>ADD_DIALOG</span>
      <div class="close_me pull-right"><a href="javascript:void(0)" id="close_windows" class="butAcc"><img src="images/icon/closeme.png" /></a></div>  
	</div>
  <div class="content">
    <form name="Add_album" id="Add_album" />
      <div class="section">
      <label>Album Name </label>   
        <div>
          <input type="text" name="name" id="name" class="validate[required,minSize[3],maxSize[35]] large" value="2013-02-15" />
        </div>
      </div>
      <div class="section last">
        <div>
          <a class="uibutton albumsubmit">submit</a> or <a id="close_windows" class="butAcc">cancel</a>
        </div>
      </div>
    </form>
  </div>
</div>