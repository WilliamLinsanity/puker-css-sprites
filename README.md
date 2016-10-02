# puker-css-sprites
<h4>用css sprites实现的整副扑克牌的CSS插件</h4>

use CSS Sprites to show the whole Puker cards.

<h5>Usage:</h5>
<ul>
Class:
<li>.puker-spade1, .puker-spade2, ..., .puker-spade13 can be used to show the Spade pattern A-K;</li>
<li>.puker-heart1, .puker-heart2, ..., .puker-heart13 can be used to show the Heart pattern A-K;</li>
<li>.puker-diamond1, .puker-diamond2, ..., .puker-diamond13 can be used to show the Diamond pattern A-K;</li>
<li>.puker-club1, .puker-club2, ..., .puker-club13 can be used to show the Club pattern A-K;</li></li>
<li>.puker-big-kingA, .puker-small-KingA, .puker-big-kingB, .puker-small-KingB, can be used to show the kings pattern;</li></li>
<li>besides, 
You should use .card to wrap 2 divs: which should be with class .face and .front.</li>
</ul>
At present, all puker cards are 80px*120px


<h5>用法:</h5>
<ul>
<li>使用.puker-spade1, .puker-spade2, ..., .puker-spade13来表示黑桃A-K;</li>
<li>使用.puker-heart1, .puker-heart2, ..., .puker-heart13来表示红桃A-K;</li>
<li>使用.puker-diamond1, .puker-diamond2, ..., .puker-diamond13来表示方片A-K;</li>
<li>使用.puker-club1, .puker-club2, ..., .puker-club13来表示梅花A-K;</li></li>
<li>使用.puker-big-kingA, .puker-small-KingA,或 .puker-big-kingB, .puker-small-KingB来表示大小王</li></li>
<li>使用一个.card类的div包裹一个div，这个子div需要具有.face类和.front类。在子类中设置以上的图案来选择其图案，不设定则为背景图案</li>
</ul>
目前，所有的扑克牌只有80px*120px大小

