# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


Please feel free to use a different markup language if you do not plan to run
<tt>rake doc:app</tt>.

I have changed bootstrap alerts with sweet alert.

Bootstrap alerts code in <tt>/layouts/application.html.erb</tt>:

	```
	<% flash.each do |name, msg| %>
		<div class="container" id="alertas">
			<% if msg.is_a?(String) %>
				<div class="alert alert-<%= name.to_s == "notice" ? "success" : "danger" %> alert-dismissable", role: "alert" >
					<button type="button" class="close" data-dismiss="alert" aria-hidden="true"><span aria-hidden="true">&times;</span></button>
					<%= content_tag :div, msg, :id => "flash_#{name}" %>
				</div>
			<% end %>
		</div>
	<% end %>
	```

I changed it to:
```
	<% flash.each do |name, msg| %>
			<% if msg.is_a?(String) %>
				<script type="text/javascript">			
					swal("Good job!", "<%= msg %>", "<%= name.to_s == "notice" ? "success" : "danger" %>")
				</script>
			<% end %>
	<% end %>
```