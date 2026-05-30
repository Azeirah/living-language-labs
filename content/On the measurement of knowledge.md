This is the third in a series of exploring Nicholas Rescher's work on Duhem's Law of Cognitive Complementarity, in the previous post I connected his main formula to the field of metrology.

In the article, I had received a lot of feedback that it was cool, but people shrugged and moved on. I hadn't explained why any of this mattered or why Rescher's initial sketches of knowledge theory (epistemetrics) have had me captivated for over 10 years.

Prepare for a light read. Buckle up.

## Two perspectives

### The dense and academic perspective

Rescher's book epistemetrics opens with the following:

> Epistemetrics is a scholarly discipline waiting to be born. With regard to scientific information there is the discipline of scientometrics, represented by a journal of that name. Science, however does not have a monopoly on knowledge; although it is one of our most important cognitive resources, it is not our only one.

Then, you encounter the first chapter:

> Asking for More Than Truth
> *Duhem's Law of Cognitive Complementarity*

> 1) Duhem’s Law of cognitive complementarity holds that inquiry is subject to a complementary relationship between security and confidence on the one hand, and definiteness and detail on the other, so that s × d ≤ const. (2) Among other things, this relationship serves to characterize the difference between science and common sense, seeing that these two domains take a very different stance regarding security and definiteness. (3) Duhem’s Law engenders an impetus to vagueness in matters where truth is paramount. (4) Moreover, security/detail complementarity has important lessons for the conduct of inquiry, and in particular means that knowledge is more than correct information as such.

Thanks. Fin. Article over. You understand Epistemetrics and Duhem's Law now.

### The world of knowledge

Nicholas Rescher imagined a world where the entirety of the field of evidence-based probability theory is enriched with a concept all of us intuitively understand but none of us can really pin down perfectly. **Knowledge**.

Knowledge is one of those concepts that sits alongside other topics we understand intuitively but not rigorously like "mind" and "intelligence".

Forget about the mathematical definition for a moment, and just take a moment to imagine what that would mean for the world. A new primitive concept that we understand intuitively that acts as the connective tissue throughout all of evidence-based probability theory with rigorous links to information theory.

It is a well-known issue that statistics is missing something. Something of a connective tissue:

> Statistics is one of the most valuable of disciplines. [...] statistics is difficult to understand for a large percentage of those who will be evaluating and even doing research. Reasons for this difficulty may be that statistics operates counter to the way people think [...] undergraduate textbooks tend to make statistical tests seem to be an unorganized conglomeration of unrelated procedures

One of the most popular books teaching statistics in the US is called "a bag of tricks".

For a select few the frequentist approach works, but for many others it simply doesn't, there is an alternative with the bayesian approach, but this is still very similar.

There is an entirely different perspective that is entirely underexplored and that is exactly what Nicholas Rescher is talking about. The purpose of statistics and science is to produce knowledge, and Rescher tells us what knowledge **is**, mathematically.

### Knowledge, not frequency

Traditional statistics requires you to think about sample sizes and frequency and distributions and sampling strategies and noise and games and ...

These are great if you understand **all of them together**, but you probably don't!

Allow me to do something entirely different. What if the purpose of statistics is to accumulate and approximate knowledge? And that's it?

Knowledge is an entirely different beast from "frequencies". It's an entirely different perspective on what statistics is *about*.

First of all, **knowledge acts like a budget**. It accumulates. If you have very little of it, you have very little to spend. Imagine knowing very little about cooking, this means you probably can't cook very well. Contrast that to knowing a lot about cooking, this probably means you can cook quite well.

Second, **knowledge is intuitive**. There's a famous saying *"knowledge is power"*. Why is knowledge power? Because knowledge allows you to make accurate predictions that let you make better choices wherever you are, whether you're a doctor making a medical decision, a hobbyist measuring the length of a plank, a scientist working at CERN or a chef working at a restaurant. Having more knowledge means you can do more things, and you can do them more reliably.

Knowledge in this perspective also includes things like skill, know-how and experience.

Third, **knowledge affords claims**. Consider for example the entrance to a rollercoaster at a rollercoaster park, these tell you how tall you have to be before you can enter. The claim "I can fit in this ride safely" either passes or it doesn't. If you know the height of a child to a great degree "My daugher was 112cm when I last measured her" and the sign says 115cm plus, you might have a little bit of uncertainty about whether the child will actually fit. If you know it at "My daugher was 100cm when I last measured her", you know she will fit.

In the first case you'd need to measure your daughter against the 115cm to know if she fits safely. In the second case your **knowledge** of her height is enough.

The knowledge is what you have in your mind, the claim "she fits safely" is what lets you act in the world.

Fourth **knowledge is reusable**. The previous example about your daughter's height is just one situation, but knowing the height also helps you pick the right clothes, it tells you whether she is growing healthily or whether her growth is too slow or too fast compared to others her age. As long as what you measured hasn't changed, knowledge is usuable in a wide variety of different situations. This means that if you invest in gaining knowledge once, you can reuse it as many times as you want it to. **The budget does not deplete**.

But you might have a bit of an issue here, wasn't reusability already true for measurement? The answer is that you're correct, measurement is indeed already reproducable. What knowledge theory introduces isn't the reinvention of measurement, it's giving the thing that measurement produces a name and a unit. Knowledge and wit, more on that unit later.

We're finally ready to wet our toes in the mathematical sea of knowledge theory.
## The mathematics of knowledge

I derived a lot of this in the previous post [[Connecting Duhem's Law of Cognitive Complementarity to metrology]], but the core move remains the same, I'll just do a better job at explaining what the heck this weirdly and densely named "Duhem's Law of Cognitive Complementarity" really means and more importantly, how you can use it.

Inspired by physicist Pierre Duhem, Nicholas Rescher came up with the following inequality for knowledge:

$$ s \cdot d \le c$$
There it is. All of knowledge theory. It's *that* simple, and that's a really good sign because something this simple is either nothing at all or incredibly useful, and Rescher and I are both convinced it's the latter.

Shannon did something similar for information, information was something people had an intuitive understanding of, but there wasn't a mathematical object to point to or use.

Once connected to the rest of math of statistics (and I have done so in the previous post), this becomes **the mathematical definition of knowledge**.

$s$ is *security*, or as I prefer to call it "certainty". Certainty is just a percentage that goes from 0% to 100%.

$d$ is *detail*. It's the difference between knowing "my daugher is around 1m", "my daughter is a little over 1m", "my daughter is 103cm" and "my daugher is 103.42cm".

c is the *knowledge budget*.

The inequality says that the product of certainty and detail together form a sort of budget, the knowledge budget. Mathematically speaking this means that knowledge is a density. The budget doesn't behave exactly like money on your bank account does, but it's close enough in many cases.

### Affordability curves

There's a second thing you need to understand and that is the affordability curve of the inequality. This is what makes knowledge flexible and reusable.

Let's just quickly draw the curve without a concrete example so you can see its shape and get familiar with it.

##### The shape of the affordability curve

```d3js
<d3html>
<div id="dlocc-w1" class="dlocc-widget">
  <style>
    #dlocc-w1{
      --ink:#26221d; --muted:#8a7f72; --grid:rgba(38,34,29,.09);
      --curve:#26221d; --afford:#4f8a5b; --afford-fill:rgba(79,138,91,.15);
      --accent:#c8772e; --over:#b5462f;
      font-family:inherit; color:var(--ink); max-width:640px; margin:0 auto;
    }
    #dlocc-w1 svg{width:100%; height:auto; display:block; overflow:visible;}
    #dlocc-w1 .dl-axis path,#dlocc-w1 .dl-axis line{stroke:var(--grid);}
    #dlocc-w1 .dl-axis text{fill:var(--muted); font-size:12px;}
    #dlocc-w1 .dl-axis-title{fill:var(--ink); font-size:12.5px; font-weight:600;}
    #dlocc-w1 .dl-curve{fill:none; stroke:var(--curve); stroke-width:2.5;}
    #dlocc-w1 .dl-region{fill:var(--afford-fill);}
    #dlocc-w1 .dl-knee{stroke:var(--accent); stroke-width:1.5; stroke-dasharray:3 3;}
    #dlocc-w1 .dl-knee-dot{fill:var(--accent);}
    #dlocc-w1 .dl-anno{font-size:12.5px; fill:var(--muted);}
    #dlocc-w1 .dl-anno-strong{font-size:12.5px; fill:var(--ink); font-weight:600;}
    #dlocc-w1 .dl-label{font-size:12px; fill:var(--afford); font-weight:600;}
    #dlocc-w1 .dl-fade{opacity:0; animation:dlw1in .7s ease forwards;}
    @keyframes dlw1in{to{opacity:1;}}
  </style>
  <figure style="margin:0;"></figure>
</div>
<script type="d3">
(function(){
  const root = d3.select("#dlocc-w1");
  const C = 0.133;                       // dial thermometer: c = 1/(σ√2π), σ≈3°C
  const dMax = 0.5;
  const windowWidth = 640;
  const windowHeight = 420;
  const margin = {t:26,r:30,b:58,l:60};
  const iw = windowWidth-margin.l-margin.r;
  const ih = windowHeight-margin.t-margin.b;

  const svg = root.select("figure").append("svg").attr("viewBox",`0 0 ${windowWidth} ${windowHeight}`).attr("class","dl-fade");
  const g = svg.append("g").attr("transform",`translate(${margin.l},${margin.t})`);

  const xScale = d3.scaleLinear().domain([0,dMax]).range([0,iw]);
  const yScale = d3.scaleLinear().domain([0,1.05]).range([ih,0]);
  const frontier = d => Math.min(1, C/d);
  const data = d3.range(0, dMax+1e-9, dMax/500).map(d=>({d, s:frontier(d)}));

  // gridlines
  g.append("g").attr("class","dl-axis")
    .selectAll("line").data(yScale.ticks(5)).join("line")
    .attr("x1",0).attr("x2",iw).attr("y1",d=>yScale(d)).attr("y2",d=>yScale(d));

  // affordable region
  const area = d3.area().x(p=>xScale(p.d)).y0(ih).y1(p=>yScale(p.s));
  g.append("path").datum(data).attr("class","dl-region").attr("d",area);

  // frontier curve
  const line = d3.line().x(p=>xScale(p.d)).y(p=>yScale(p.s));
  g.append("path").datum(data).attr("class","dl-curve").attr("d",line);

  // knee at d = c (where security hits 100%)
  g.append("line").attr("class","dl-knee").attr("x1",xScale(C)).attr("x2",xScale(C)).attr("y1",yScale(1)).attr("y2",ih);
  g.append("circle").attr("class","dl-knee-dot").attr("cx",xScale(C)).attr("cy",yScale(1)).attr("r",4);
  g.append("text").attr("class","dl-anno").attr("x",xScale(C)+8).attr("y",yScale(1)+16);

  // axes
  g.append("g").attr("class","dl-axis").attr("transform",`translate(0,${ih})`)
    .call(d3.axisBottom(xScale).ticks(6).tickFormat(d3.format(".2f")));
  g.append("g").attr("class","dl-axis")
    .call(d3.axisLeft(yScale).tickValues([0,.25,.5,.75,1]).tickFormat(d3.format(".0%")));

  // axis titles
  g.append("text").attr("class","dl-axis-title").attr("x",margin.l + iw/2).attr("y",ih+44).attr("text-anchor","end")
    .text("detail  d  →  (narrower claim)");
  g.append("text").attr("class","dl-axis-title").attr("transform","rotate(-90)").attr("x",-ih/2).attr("y",-44).attr("text-anchor","middle")
    .text("security  s  →  (more sure)");

  // corner annotations
  g.append("text").attr("class","dl-anno-strong").attr("x",4).attr("y",yScale(1.02)).text("vague, but certain");
  g.append("text").attr("class","dl-anno").attr("x",iw).attr("y",ih-8).attr("text-anchor","end").text("precise, but shaky");
})();
</script>
</d3html>
```

A knowledge budget always has this form, and a claim is a point on this graph. Put a point somewhere in the green zone and you have a claim that is supported by the evidence, ie, "the claim clears" or "the knowledge budget is sufficient to support the claim".

There's an area at the left where security is 100%. This is always true. You can always change your claim to be vaguer and vaguer to the point where it doesn't really say anything anymore and it's always true. For example, "the steak currently has a temperature above 0 Kelvin", you can say that with 100% certainty, but that's not too useful.

A good knowledge budget allows you to make meaningful claims at meaningful levels of certainty. Since this is an abstract graph ripped from a real-world context, I cannot connect it further. Let's move on to the next one.

Remember

1. A knowledge budget always has this graph shape
2. A claim is a point on this graph

##### Better budgets clear more claims

If you have a better budget, there are more claims that will clear cleanly.

```d3js
<d3html>
<div id="dlocc-w2" class="dlocc-widget">
  <style>
    #dlocc-w2{
      --ink:#26221d; --muted:#8a7f72; --grid:rgba(38,34,29,.09);
      --curve:#26221d; --afford:#4f8a5b; --afford-fill:rgba(79,138,91,.15);
      --accent:#c8772e;
      font-family:inherit; color:var(--ink); max-width:640px; margin:0 auto;
    }
    #dlocc-w2 svg{width:100%; height:auto; display:block; overflow:visible;}
    #dlocc-w2 .dl-axis path,#dlocc-w2 .dl-axis line{stroke:var(--grid);}
    #dlocc-w2 .dl-axis text{fill:var(--muted); font-size:12px;}
    #dlocc-w2 .dl-axis-title{fill:var(--ink); font-size:12.5px; font-weight:600;}
    #dlocc-w2 .dl-curve{fill:none; stroke:var(--curve); stroke-width:2.5;}
    #dlocc-w2 .dl-region{fill:var(--afford-fill);}
    #dlocc-w2 .dl-knee{stroke:var(--accent); stroke-width:1.5; stroke-dasharray:3 3;}
    #dlocc-w2 .dl-knee-dot{fill:var(--accent);}
    #dlocc-w2 .dl-controls{
      display:flex; flex-wrap:wrap; align-items:center; gap:14px 22px;
      margin-bottom:16px; font-size:14px;
    }
    #dlocc-w2 .dl-controls label{display:flex; align-items:center; gap:8px; color:var(--muted);}
    #dlocc-w2 select,#dlocc-w2 input[type=range]{font-family:inherit; font-size:14px; accent-color:var(--accent);}
    #dlocc-w2 select{padding:5px 8px; border:1px solid #d9cfbd; border-radius:6px; background:#fffdf8; color:var(--ink);}
    #dlocc-w2 input[type=range]{width:140px; cursor:ew-resize;}
    #dlocc-w2 .dl-budget-readout{font-family:ui-monospace,SFMono-Regular,Menlo,monospace; font-size:13px; color:var(--ink); font-weight:600;}
    #dlocc-w2 .dl-caption{font-size:12.5px; color:var(--muted); margin-top:10px; line-height:1.55;}
  </style>

  <div class="dl-controls">
    <label>instrument
      <select class="dl-preset-select">
        <option value="0.050">finger — no experience</option>
        <option value="0.080">finger — expert cook</option>
        <option value="0.133" selected>cheap thermometer</option>
        <option value="0.399">expensive thermometer</option>
        <option value="custom">custom budget…</option>
      </select>
    </label>
    <label>budget&nbsp;c
      <input type="range" class="dl-budget-slider" min="0.02" max="0.5" step="0.001" value="0.133">
    </label>
    <span class="dl-budget-readout"></span>
  </div>

  <figure style="margin:0;"></figure>
  <div class="dl-caption"></div>
</div>
<script type="d3">
(function(){
  const root = d3.select("#dlocc-w2");
  const dMax = 0.8;
  const windowWidth = 600, windowHeight = 400, margin = {t:20,r:30,b:58,l:60};
  const iw = windowWidth-margin.l-margin.r, ih = windowHeight-margin.t-margin.b;
  const fmt1 = d3.format(".1f"), f3 = d3.format(".3f");

  const svg = root.select("figure").append("svg").attr("viewBox",`0 0 ${windowWidth} ${windowHeight}`);
  const g = svg.append("g").attr("transform",`translate(${margin.l},${margin.t})`);
  const xScale = d3.scaleLinear().domain([0,dMax]).range([0,iw]);
  const yScale = d3.scaleLinear().domain([0,1.05]).range([ih,0]);
  const samples = c => d3.range(0,dMax+1e-9,dMax/500).map(d=>({d,s:Math.min(1,c/d)}));

  const area = d3.area().x(p=>xScale(p.d)).y0(ih).y1(p=>yScale(p.s));
  const line = d3.line().x(p=>xScale(p.d)).y(p=>yScale(p.s));

  // gridlines
  g.append("g").attr("class","dl-axis")
    .selectAll("line").data(yScale.ticks(5)).join("line")
    .attr("x1",0).attr("x2",iw).attr("y1",d=>yScale(d)).attr("y2",d=>yScale(d));

  // elements that update when the budget changes
  const regionPath = g.append("path").attr("class","dl-region");
  const curvePath  = g.append("path").attr("class","dl-curve");
  const kneeLine = g.append("line").attr("class","dl-knee").attr("y1",yScale(1)).attr("y2",ih);
  const kneeDot  = g.append("circle").attr("class","dl-knee-dot").attr("r",4).attr("cy",yScale(1));

  // axes
  g.append("g").attr("class","dl-axis").attr("transform",`translate(0,${ih})`)
    .call(d3.axisBottom(xScale).ticks(7).tickFormat(d3.format(".2f")));
  g.append("g").attr("class","dl-axis")
    .call(d3.axisLeft(yScale).tickValues([0,.25,.5,.75,1]).tickFormat(d3.format(".0%")));
  g.append("text").attr("class","dl-axis-title").attr("x",iw).attr("y",ih+44).attr("text-anchor","end")
    .text("detail  d  →  (narrower claim)");
  g.append("text").attr("class","dl-axis-title").attr("transform","rotate(-90)").attr("x",-ih/2).attr("y",-44).attr("text-anchor","middle")
    .text("security  s  →  (more sure)");

  const select  = root.select(".dl-preset-select");
  const slider  = root.select(".dl-budget-slider");
  const readout = root.select(".dl-budget-readout");
  const caption = root.select(".dl-caption");

  function draw(c, animate){
    const data = samples(c);
    const kneeD = Math.min(c, dMax);
    const dur = animate ? 350 : 0;
    regionPath.transition().duration(dur).attr("d", area(data));
    curvePath.transition().duration(dur).attr("d", line(data));
    kneeLine.transition().duration(dur).attr("x1",xScale(kneeD)).attr("x2",xScale(kneeD));
    kneeDot.transition().duration(dur).attr("cx",xScale(kneeD));
    readout.text(`c = ${f3(c)} wit/°C`);
    caption.html(`At this budget you stay <strong>certain</strong> for any window wider than ±${fmt1(1/(2*c))}°C.`);
  }

  select.on("change", function(){
    if(this.value === "custom") return;
    const c = +this.value;
    slider.property("value", c);
    draw(c, true);
  });
  slider.on("input", function(){
    select.property("value", "custom");
    draw(+this.value, false);
  });

  draw(0.133, false);
})();
</script>
</d3html>
```

The widget above tells you a lot. Your finger, even if you're inexperienced, is actually a pretty decent measuring tool if you don't know what you're doing. You can easily clear claims like "it's really hot" and "it's cold". As you gain experience with cooking you gain the ability to distinguish with more detail, so the knowledge budget your finger generates for temperature grows as you use it more often.

Despite the knowledge curve produced by your finger expanding as you gain experience, you will not be able to make detailed claims about the real temperature with your finger no matter how hard you try. You can only ever give ballpark estimates. Ballpark estimates are good enough for many claims that matter like "this is burning" or "this is not hot enough yet" or "I need to raise the flame a bit and check back in a few minutes".

That's everyday cooking. You don't *need* a measurement tool to do that kind of everyday cooking, and all those insights and decision points are instances of claims clearing a knowledge budget.

That being said, if you want more? Your finger isn't enough.

Switch to a different tool in the dropdown and you can see that the knowledge curve expands.

##### Making the claims explicit

Now that we understand the basics, we can make the claims more visible.





Your finger never beats a cheap thermometer though.