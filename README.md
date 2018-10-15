# Website Documentation

## Table of Contents

1. [General](#General)

2. [Banner Images]

### 3. Mission Statement

### 4. Research

### 5. Team

### 6. Publications

### 7. News

### 8. Events

### 9. Jobs, Contact and Downloads

## 1. General<a name="introduction"></a>

The website is built using **Jekyll**, a Ruby based static website generator. It makes use of **YAML**, **markdown** and **LiquidScript** to generate websites. The use of YAML and markdown makes it easy to edit and create content for the website without coding explicit html.

You can find the documentation of Jekyll [here](https://jekyllrb.com/docs/), the YAML documentation [here](https://jekyllrb.com/docs/front-matter/) and the LiquidScript documentation [here](https://jekyllrb.com/docs/liquid/).

Now follows a simple example of YAML and markdown:

```yaml/markdown
---
layout: member_post
title: Denis Alevi
img: "assets/img/denis_crop.JPG"
position: Master Student
permalink: /denis/
room: MAR 5.014
email: denis.alevi@bccn-berlin.de
---
Denis Alevi studied Physics at Heidelberg University, where he worked on
Neuromorphic Hardware for his bachelor's thesis. Currently he is pursuing a
master's degree in Computational Neuroscience at the Bernstein Center in Berlin
and joined the lab in 2017. For his master's thesis he is trying to
understand how biologically motivated constraints to network architectures can
lead to episodic to semantic memory transformations in a mechanistic model of
systems memory consolidation. To this end, he uses methods from machine
learning, computational models from neuroscience and mathematical analysis.
Denis is also interested in algorithms for simulating spiking neural networks
on graphics processing units and has developed the open source software
Brian2CUDA.
```

The part between the '---' characters is the YAML header. It allows to define variables that are later used to generate a page. These variables, the characters after the colon are going to be used by Jekyll to automatically create Denis' member page.

The part below is markdown, which is basically just text, but where you can also insert links and images and tables and so on. We are mostly using it for text and for the fact that when html is generated from it, formatting is preserved.

## 2. Banner Images

For all pages except the home page the banner images should be located in `assets/img/banners` . Then we need to indicate that we want to use a particular image in that folder in the file corresponding to the page we want to use it on. All page-files are located in the folder `pages`. Now if we want to change the banner of the news page for example, we open `news.md` and edit (or add, if it doesn't exist) the line

```yaml
banner-img: "news_image.JPG"
```

where news_image.JPG is the desired image that we put in the `assets/img/banners` folder.

For the home page, to change the image we edit the `banner-img ` entry of `index.html` the same way described above.

## 3. Mission Statement

To change the Mission Statement, open `_config.yml` and edit the line `text: `.

## 4. Research

### Projects

All research projects are located in the folder `_research/`. Let us look at an example:

```yml/markdown
---
layout: page
title: Burst  Control  in  Cortical  Circuits 
image: "assets/img/diag_filip.jpg"
parent: "Microcircuit"
authors:
    - Henning Sprekeler
    - Filip Vercruysse
---
The  existence  of  specialized  mechanisms  for  burst  generation  in  pyramidal  cells  (PCs)  suggests  that  bursts  are  likely  to  be  an  important  temporal  feature  of  neural  signals.  In L5  PCs  bursts  occur  at  a  low,  but  consistent  rate,  and  are  thought  to  arise  from  active  dendritic  processes.  Given  that  burst  activity  relies  on  dendritic  threshold  mechanisms,  it  appears  likely  that  low  burst  activity  require  homeostatic  control,  but  the  underlying  mechanisms  are  not  resolved.  In  this  research  project  we  model  a  biologically  inspired  circuit  diagram  of  a  self-organized  microcircuit  with  different  inhibitory  cell  types  and  plasticity  rules  to  control  the  burst  and  population  rate  of  PCs.  Our  work  shows  that  inhibitory  plasticity  rules  may  serve  as  building  blocks  to  self-organise  complex  network  architectures  and  allows  us  to  investigate  coding  properties  of  bursting  units  without  the  need  for  tuning  of  input  or  noise  levels. 
```

`layout` whould always be 'page'. The title is obviously the title of the project. image holds the path to the image displayed with the project. All project images should be placed in the `assets/img/` folder [todo].

parent should be set to one of the four categories listed in the file `pages/1_research.md` under headings; currently 'Synaptic', 'Cellular', 'Microcircuit', 'Behavior'.

authors is a list of authors that work on the project. These names should exactly correspond with the `title` entry of a file in the _portfolio[_members][todo] folder, in other words, if said person is in the group, its name has to be written the same way here as for the team-page (see entry on the team page).

The markdown contains a description of the project.

To create a new project, just create a new file with this structure in the `_research/` folder.

### Navigation Categories

To change the research project categories (currently) 'Synaptic', 'Cellular', 'Microcircuit', 'Behavior', edit  the `headings` entry of `pages/1_research.md`. Do not forget the whitespace before the '-'!

### Navigation Images

To assign new images in the navigation bar of the research page, edit the `images` list in `pages/1_research.md`. All of the image files have to be out into `assets/img/` [todo].

## 5. Team

For each team member there is a file in `_portfolio` ( [`members`])`todo`]. All of these have a YAML header that looks like this:

```yaml
---
layout: member_post
title: Denis Alevi
img: "assets/img/denis_crop.JPG"
position: Master Student
permalink: /denis/
room: MAR 5.014
email: denis.alevi@bccn-berlin.de
tel: +49 123456789
---
```

The layout is always member_post, the title is the name of the person. The image should be set the path to the image (which should be in the folder `assets/img`[todo]). These images also should have a height to width ratio of approximately 10:9. The permalink denotes the link under which this site is going to be reachable, i.e. `sprekelerlab.net/denis/` in this case. room, tel and email are optional and self-explanatory.

The markdown part afterwards is the short bio of the person in question and is later displayed on their page.

## 6. Publications

All publications haven an entry in `_data/publications.json`, which contains a list of dictionaries , each of which corresponds to a publication. An entry looks like this:

```{
{
    "title": "Sparse bursts optimize information transmission in a multiplexed neural code",
    "author": "R. Naud, H. Sprekeler",
    "year": "2018",
    "journal": "PNAS, 115(27):E6329-E6338",
    "link" : "chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/http://www.pnas.org/content/pnas/early/2018/06/21/1720995115.full.pdf"
}
```

Edit and create new entries at your heart's delight.

The publications are later automatically sorted by year, but **within a year the order within the file is preserved**. 

## 7. News

News posts are all located in `_posts/`.  The name of the file always follows the follwing convention: `year-month-day-title.md`, for example `2013-11-18-im-a-blog-post.md`. The date is important and used later, the title is not.

Each such file has a YAML header:

```

```

```yaml
---
layout: post
title: Feature images
thumbnail: "assets/img/thumbnails/desk-messy.jpeg"
---
```

The layout is always post. The title is the title of the post. The thumbnail is optional and should  be set to the path of the desired image (by convention in the folder `assets/img/thumbnails`).

The markdown after the YAML header contains the content of the news post.

To make a new news post, simply create or copy a file with this structure and edit it to your expectations.

 ## 8. Events

Each event has its own file, and all of those are located in `_talks`[todo].

The YAML header of these `.md` files looks like this:

```yaml
---
layout: post_event
title: The Cost of Control in Perceptual Decision Making
date: July 04, 2020, 18:00
speaker: Alfonso Renart
location: MAR 1002.356
affiliation: Champalimaud
priority: September 18, 2018
---
```

layout is always post_event. Title, date, speaker, location and affiliation (of the speaker) are self-explanatory. **It is important that the date (which can, but does not have to contain a time) is always written in the same format (like written here).**

Priority is an optional entry that requires some more explanation. The home page of the website always displays the three next events. Usually that is good enough, but sometimes we want to advertise important events early, even if they lie far in the future and are not among the three next ones. In that case we can set priority to a date, and after this date passes, this event is considered as having priority, meaning that is is displayed on the home page regardless of how far in the future it lies.

## 9. Jobs, Contact and Downloads

To change the contents of the jobs page, simply edit the markdown portion of  `pages/6_jobs.md`. 

The same goes for Downloads, the file is `pages/8_downloads.md`.

The contact file ( `pages/7_contact.md`) is encoded in html. To edit it, simply edit the text according to html-conventions.

## 10. Impressum

tbd

## 11. Notes for later Webmasters
tbd
