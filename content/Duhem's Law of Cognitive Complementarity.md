---
title: "Duhem's Law of Cognitive Complementarity - My favorite obscure law in epistemology"
publish_date: 2025-09-02
published: false
tags:
---

One thing I love to do is browse different sections at bookstores and see what I find. About ten years ago, while browsing the philosophy section I found a small, unassuming pink book named [Epistemetrics](https://www.goodreads.com/book/show/3081381-epistemetrics) by Nicholas Rescher:

%%Nicer word for small? That is similar in meaning to "friendly", "tiny", "cute", "pithy"%%

> Epistemetrics is a scholarly discipline waiting to be born. With regard to scientific information there is the discipline of scientometrics, represented by a journal of that name. Science, however does not have a monopoly on knowledge; although it is one of our most important cognitive resources, it is not our only one.

Epistemology, if you're not too familiar, is the philosophical study of knowledge, and Rescher here is proposing the birth of a subfield of epistemology aiming to make knowledge _measurable_ and *quantifiable*.

The entire book is great, it's only 105 pages long and it's a fascinating consolidation of well-known and lesser known ideas in epistemology - tying these ideas together with the common goal of making these ideas *quantifiable*.

I'm interested in writing more about this book at a later point, but for this post I wanted to zoom in to the first chapter. This chapter had me fascinated 10 years ago, and it has continued to resurface at least once a month in all kinds of unexpected and unrelated scenarios.

## Asking for More Than Truth
### Duhem's Law of Cognitive Complementarity

Many mathematical laws describe something so simple and so elemental that it is hard to un-see after you've been exposed to them. This is equally so the case with Duhem's Law of Cognitive Complementarity.

It's hard to do Rescher's writing justice, since every single paragraph is both dense and precise. Here goes.

In our everyday usage of the word knowledge, it is clearly distinct from information. What makes knowledge so different? Rescher claims that *certainty* is one aspect that makes knowledge *knowledge*. This is not so hard to imagine - imagine going hiking and you see a mountain in the distance. You say "I think the mountain is about 80km away", your hiking friend says, "You're way off, it's actually 187.5km away.".

You open your phone, find the mountain and see that it's 187km and 650 meters away. Note what has happened here, not only were you wrong, you were also less *detailed* about your prediction.

Rescher states there are two aspects to knowledge that stand in relation to one another when it comes to certainty. There is the *detail* of a claim, and there is the *security* of a claim. Now, these two words are simple but surprisingly difficult to grasp precisely due to their overloaded meanings.

The *detail* of a claim is relatively straightforward, especially if you are able to express this claim claim numerically.

I found that security is more difficult to grasp, it may mean how "sure" you are about your prediction. When making the claim about the distance to the mountain, you implied some uncertainty "I think...", whereas your friend claimed greater certainty "You're way off, it's actually ...".

Rescher identified that the physicist and philosopher of science *Pierre Duhem* made a strong claim about how these two aspects of claims stand in relation to one another. You are *always* able to trade certainty for detail.

Imagine having to make a claim about the mountain, but you're challenged to phrase it in such a manner to say something you are 100% certain about. You could say *"I'm absolutely certain it's less than 10.000km away"*. The utility of such a statement is questionable, but you wouldn't experience the slightest of doubt making such a claim. Similarly, how about "I'm very certain it's less than 1.000km away"? Going on, "I'm quite sure it's less than 250km away"; "I think it's less than 100km away".

You are actively trading certainty for detail.

Rescher took Duhem's tradeoff and formalised it with a remarkably simple equation

$$s \times d \leq const$$

Where the product of $s$, security and $d$, detail is lesser than or equal to a constant. He named this law **Duhem's Law of Cognitive Complementarity**.

```d3js
<d3html>
    <style>
        .grid line {
            stroke: #e0e0e0;
            stroke-opacity: 0.7;
        }
        
        .grid path {
            stroke-width: 0;
        }
        
        .curve {
            fill: none;
            stroke: #667eea;
            stroke-width: 3;
        }
        
        .area {
            fill: #667eea;
            opacity: 0.2;
        }
        
        .tooltip {
            position: absolute;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 8px 12px;
            border-radius: 5px;
            font-size: 12px;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.2s;
        }
        
        .formula {
          font-family: monospace;
        }
    </style>
    <div id="duhem-tradeoff"></div>
	<div class="formula">s x d = <span id="constant">100</span></div>
	<input type="range" id="constSlider" min="10" max="500" value="100" />
	<div class="tooltip" id="tooltip"></div>
</d3html>

<script type="d3">
// Set up dimensions and margins
const margin = {top: 20, right: 40, bottom: 60, left: 60};
const width = 600 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

// Create SVG
const svg = d3.select('#duhem-tradeoff')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom);

const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

// Set up scales
const xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, width]);

const yScale = d3.scaleLinear()
    .domain([0, 100])
    .range([height, 0]);

// Add grid
const xGrid = g.append('g')
    .attr('class', 'grid')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(xScale)
        .tickSize(-height)
        .tickFormat(''));

const yGrid = g.append('g')
    .attr('class', 'grid')
    .call(d3.axisLeft(yScale)
        .tickSize(-width)
        .tickFormat(''));

// Add axes
const xAxis = g.append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(xScale));

const yAxis = g.append('g')
    .call(d3.axisLeft(yScale));

// Add axis labels
svg.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 15)
    .attr('x', -height/2 - margin.top)
    .style('text-anchor', 'middle')
    .text('Security (s)');

svg.append('text')
    .attr('x', width/2 + margin.left)
    .attr('y', height + margin.top + 50)
    .style('text-anchor', 'middle')
    .text('Detail (d)');

// Create line generator
const line = d3.line()
    .x(d => xScale(d.x))
    .y(d => yScale(d.y))
    .curve(d3.curveMonotoneX);

// Create area generator
const area = d3.area()
    .x(d => xScale(d.x))
    .y0(height)
    .y1(d => yScale(d.y))
    .curve(d3.curveMonotoneX);

// Add area and line paths
const areaPath = g.append('path')
    .attr('class', 'area');

const linePath = g.append('path')
    .attr('class', 'curve');

// Tooltip
const tooltip = d3.select('#tooltip');

// Interactive dot
const dot = g.append('circle')
    .attr('r', 5)
    .attr('fill', '#667eea')
    .style('display', 'none');

// Update function
function updateGraph() {
    const c = parseInt(document.getElementById('constSlider').value);
    document.getElementById('constant').textContent = c;
    
    // Generate data
    const data = [];
    for (let d = 0.5; d <= 100; d += 0.5) {
        data.push({x: d, y: Math.min(c / d, 100)});
    }
    
    // Update the line and area
    linePath
        .datum(data)
        .transition()
        .duration(300)
        .attr('d', line);
    
    areaPath
        .datum(data)
        .transition()
        .duration(300)
        .attr('d', area);
    
    // Add interactivity
    svg.on('mousemove', function(event) {
        const [mouseX, mouseY] = d3.pointer(event, g.node());
        const x = xScale.invert(mouseX);
        const y = c / x;
        
        if (x > 0 && x <= 100 && y > 0 && y <= 100) {
            dot
                .style('display', 'block')
                .attr('cx', xScale(x))
                .attr('cy', yScale(y));
            
            tooltip
                .style('opacity', 1)
                .style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY - 10) + 'px')
                .html(`Detail: ${x.toFixed(1)}<br>Security: ${y.toFixed(1)}`);
        } else {
            dot.style('display', 'none');
            tooltip.style('opacity', 0);
        }
    })
    .on('mouseleave', function() {
        dot.style('display', 'none');
        tooltip.style('opacity', 0);
    });
}

// Event listener for slider
document.getElementById('constSlider').addEventListener('input', updateGraph);

// Initial render
updateGraph();
</script>
```

I have to end this post for now, as I have been writing for long enough for now. I will certainly revisit the topic at a later point in time and dive deeper into the fascinating topic of this deceptively simple tradeoff in the novel field of *epistemetrics*.

But for now, please entertain yourself with the amazing *interactive graph* above and [make sure to get yourself a copy](https://www.cambridge.org/nl/universitypress/subjects/philosophy/logic/epistemetrics?format=PB&isbn=9780521178501) of Rescher's Epistemetrics.

Stay tuned for more.

~ Laura