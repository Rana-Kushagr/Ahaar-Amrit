function Index() {
return (

<div className="
min-h-screen
overflow-hidden
bg-background
">


<section className="
relative
min-h-screen
flex
items-center
justify-center
px-6
pt-32
">


<div className="
absolute
top-20
left-10
h-72
w-72
rounded-full
bg-primary/20
blur-3xl
animate-float
"/>


<div className="
absolute
bottom-10
right-10
h-96
w-96
rounded-full
bg-secondary/20
blur-3xl
animate-float-slow
"/>



<div className="
relative
z-10
max-w-6xl
grid
md:grid-cols-2
gap-12
items-center
">


{/* LEFT */}

<div>


<p className="
font-hindi
text-xl
text-secondary
mb-4
">
स्वस्थ भारत, विकसित भारत
</p>


<h1 className="
font-display
text-6xl
md:text-8xl
font-bold
leading-tight
">

आहार

<span className="
text-gradient-saffron
">
 अमृत
</span>

</h1>


<p className="
mt-6
text-xl
text-muted-foreground
max-w-xl
">

Personalized Indian nutrition powered by
modern science, traditional wisdom and your
unique lifestyle.

</p>


<div className="
mt-8
flex
gap-4
">


<Link
to="/onboarding"
className="
rounded-full
bg-primary
px-8
py-4
text-white
shadow-glow
hover:scale-105
transition
"
>

Create Profile

</Link>


<Link
to="/dosha"
className="
rounded-full
border
px-8
py-4
hover:bg-muted
"
>

Explore Ayurveda

</Link>


</div>


</div>



{/* RIGHT CARD */}


<div className="
relative
">


<div className="
glass
rounded-[3rem]
p-10
shadow-warm
">

<div className="
h-72
rounded-[2rem]
bg-gradient-premium
flex
items-center
justify-center
">

<Leaf
className="
h-32
w-32
text-white
animate-float
"
/>

</div>


<div className="
mt-8
grid
grid-cols-3
gap-3
">


{
["Protein","Energy","Balance"]
.map(x=>(

<div
key={x}
className="
rounded-2xl
bg-white/40
p-4
text-center
"
>

<p className="
font-bold
">
{x}
</p>

<p className="
text-xs
text-muted-foreground
">
AI Plan
</p>


</div>


))
}


</div>


</div>

</div>



</div>


</section>


</div>

)
}
