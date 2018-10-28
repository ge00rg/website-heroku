--- 
layout: page
title : Events 
permalink: /events/
banner-img: "events_cut_scale.JPG"
---

{% assign talks=site.talks | sort: 'date' | reverse %}

{% assign years=""| split: "," %}
{% assign dates=""| split: "," %}

{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}

{% for talk in talks %}
{% assign year=talk.date | date: "%Y" %}
{% assign years=years | push:year %}
{% assign date=talk.date | date:  '%s' %}
{% assign dates=dates | push: date %}
{% endfor %}

{% assign future_years="" | split: "," %}
{% assign past_years=""| split: "," %}
{% for date in dates %}
  {% assign year=date|date:"%Y" %}
  {% if date < nowunix %}
    {% assign past_years=past_years | push: year %}
  {% else %}
        {% assign future_years=future_years | push: year %}
  {% endif %}
{% endfor %}

{% assign years=years|uniq %}

<!-- Future -->
<h2>Upcoming Events</h2>
{% for i in years %}
{% if future_years contains i %}
<h3>{{i}}</h3>
<table id="talks" class="talks" style="overflow: hidden;">
<tbody>
{% for talk in talks %}

{% assign year=talk.date|date: "%Y" %}
{% capture date %}{{talk.date | date: '%s'}}{% endcapture %}

{% if date >= nowunix %}
{% if year==i %}
    {%if talk.img %}
      {% assign imgurl=talk.img %}
    {% else %}
      {% assign imgurl=site.emergency-img %}
    {%endif%}

	<tr onclick="location.href='{{ talk.url | prepend: site.baseurl }}'">
            <td><b>{{talk.speaker}}</b> <span id="affil">{%if talk.affiliation %}[{{talk.affiliation}}]{% endif %}</span><span id="date">{{talk.date| date: "%B %-d, %Y"}}</span><br><i>{{talk.title}}</i><br><div id="abstractbox">{{talk.content|strip_html|truncate:170}}</div></td><td></td>
        </tr>
{% endif %}
{% endif %}
{% endfor %}
</tbody>
</table>
{% endif %}
{% endfor %}

<!-- Past -->
<h2>Past Events</h2>
{% for i in years %}
{% if past_years contains i %}
<h3>{{i}}</h3>
<table id="talks" class="talks" style="overflow: hidden;">
<tbody>
{% for talk in talks %}

{% assign year=talk.date|date: "%Y" %}
{% capture date %}{{talk.date | date: '%s'}}{% endcapture %}

{% if date < nowunix %}
{% if year==i %}
    {%if talk.img %}
      {% assign imgurl=talk.img %}
    {% else %}
      {% assign imgurl=site.emergency-img %}
    {%endif%}

	<tr onclick="location.href='{{ talk.url | prepend: site.baseurl }}'">
            <td><b>{{talk.speaker}}</b> <span id="affil">{% if talk.affiliation %}[{{talk.affiliation}}]{% endif %}</span><span id="date">{{talk.date| date: "%B %-d, %Y"}}</span><br><i>{{talk.title}}</i><br><div id="abstractbox">{{talk.content|strip_html|truncate:170}}</div></td><td></td>
        </tr>
{% endif %}
{% endif %}
{% endfor %}
</tbody>
</table>
{% endif %}
{% endfor %}
