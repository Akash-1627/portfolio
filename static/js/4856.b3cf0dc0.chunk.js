"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[4856],{4856:(e,o,t)=>{t.d(o,{TwinkleUpdater:()=>n});var i=t(4864);class s{constructor(){this.enable=!1,this.frequency=.05,this.opacity=1}load(e){e&&(void 0!==e.color&&(this.color=i.wD.create(this.color,e.color)),void 0!==e.enable&&(this.enable=e.enable),void 0!==e.frequency&&(this.frequency=e.frequency),void 0!==e.opacity&&(this.opacity=(0,i.Ws)(e.opacity)))}}class l{constructor(){this.lines=new s,this.particles=new s}load(e){e&&(this.lines.load(e.lines),this.particles.load(e.particles))}}class n{getColorStyles(e,o,t,s){const l=e.options.twinkle;if(!l)return{};const n=l.particles,a=n.enable&&(0,i.CE)()<n.frequency,r=e.options.zIndex,c=(1-e.zIndexFactor)**r.opacityRate,p=a?(0,i.qS)(n.opacity)*c:s,d=(0,i.cl)(n.color),h=d?(0,i.CK)(d,p):void 0,u={},w=a&&h;return u.fill=w?h:void 0,u.stroke=w?h:void 0,u}async init(){await Promise.resolve()}isEnabled(e){const o=e.options.twinkle;return!!o&&o.particles.enable}loadOptions(e){e.twinkle||(e.twinkle=new l);for(var o=arguments.length,t=new Array(o>1?o-1:0),i=1;i<o;i++)t[i-1]=arguments[i];for(const s of t)e.twinkle.load(null===s||void 0===s?void 0:s.twinkle)}async update(){await Promise.resolve()}}}}]);
//# sourceMappingURL=4856.b3cf0dc0.chunk.js.map