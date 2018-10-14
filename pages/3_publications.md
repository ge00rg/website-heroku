--- 
layout: page
title : Publications 
permalink: /publications/
customjs:
 - sorter.js
subtitle:
banner-img: "publications_cut_scale.JPG"
---

{% assign publications=site.data.publications | sort: 'year' | reverse %}

{% assign years=""| split: "," %}

{% for pub in publications %}
{% assign years=years | push:pub.year %}
{% endfor %}

{% assign years=years|uniq %}

{% for i in years %}
<h3>{{i}}</h3>
<table class="publications">
{% for paper in site.data.publications %}
{% if paper.year==i %}
	<tr><td width="100%" onclick="location.href='{{paper.link}}'"> <b>{{paper.title}}</b><br>{{paper.author}} <br> {{paper.journal}}</td><td></td></tr>
{% endif %}
{% endfor %}
</table>
{% endfor %}

