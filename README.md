# mdx-deck-layouts
MDX-Deck Layouts samples.


#### VerticalFlex.js
Creates a flex-box layout of direct components stacked vertically (columns).

Example (In combination with Split Layout):
![image](https://user-images.githubusercontent.com/10993808/49327876-d99d6e80-f58c-11e8-8552-b0465b92874b.png)


#### HorizontalFlex.js
Creates a flex-box layout of direct components stacked horizontally, better than conventional LeftRight layout if the number of elements are greater than 2.


#### Provider.js
Updated Provider file with an added Footer which displays the slide count as 'Slide 1 of N' apart from the dots at the bottom.

Example:
![Image of Updated Footer](https://user-images.githubusercontent.com/10993808/49327796-bc1bd500-f58b-11e8-913c-5bbb68ce69be.png)

#### ImageHorizontal.js
Flex box of N horizontal images with proper spacing and padding to ensure that they look beautiful :)


#### GridLayout Example

Mix of Vertical layout with HorizontalFlex can give you a matrix like view if you want to make the slides more stylish.

Code:
```
---

export default VerticalLayout   

<Appear>
<h4>Title Comes Here</h4>
<h4><HorizontalFlex key="1"><h6>Short Title Here </h6><h6>Description of the title<br></br> And continued here</h6></HorizontalFlex></h4>
<h4><HorizontalFlex key="2"><h6>Short Title Here</h6><h6>Description of the title<br></br> And continued here</h6></HorizontalFlex></h4>
</Appear>

```

Example:

![image](https://user-images.githubusercontent.com/10993808/49327933-fd14e900-f58d-11e8-92a2-4689a9e0fbf9.png)


