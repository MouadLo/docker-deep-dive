(this["webpackJsonpfirdawss-shop"]=this["webpackJsonpfirdawss-shop"]||[]).push([[6],{124:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(20),c=t(11),l=t(101),u=t.n(l),o=t(102),m=t.n(o),d=function(n){var e=n.price,t=100*e;return r.a.createElement(u.a,{label:"Pay Now",name:"Imane Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is  $".concat(e),amount:t,panelLabel:"Pay Now",token:function(n){m()({url:"payment",method:"post",data:{amount:t,token:n}}).then((function(n){alert("Payment successful")})).catch((function(n){console.log("Payment error",JSON.parse(n)),alert("There was an issue with your payment. please make sure you use the provided credit cart")}))},stripeKey:"pk_test_8xX77SkPciU88kRzuBfw2xpG"})},s=t(29),p=t(7),f=t(8);function h(){var n=Object(p.a)(["\n  padding-left: 12px;\n  cursor: pointer;\n"]);return h=function(){return n},n}function v(){var n=Object(p.a)(["\n  display: flex;\n  span {\n    margin: 0 10px;\n  }\n  div {\n    cursor: pointer;\n  }\n"]);return v=function(){return n},n}function x(){var n=Object(p.a)(["\n  width: 23%;\n  @media screen and (max-width: 800px) {\n    width: 22%;\n  }\n"]);return x=function(){return n},n}function b(){var n=Object(p.a)(["\n  width: 23%;\n  padding-right: 15px;\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]);return b=function(){return n},n}function g(){var n=Object(p.a)(["\n  width: 100%;\n  display: flex;\n  min-height: 100px;\n  border-bottom: 1px solid darkgrey;\n  padding: 15px 0;\n  font-size: 20px;\n  align-items: center;\n  @media screen and (max-width: 800px) {\n    font-size: 18px;\n  }\n"]);return g=function(){return n},n}var E=f.c.div(g()),w=f.c.div(b()),y=f.c.span(x()),O=Object(f.c)(y)(v()),j=f.c.div(h()),k=Object(i.b)(null,(function(n){return{clearItem:function(e){return n(Object(s.c)(e))},addItem:function(e){return n(Object(s.a)(e))},removeItem:function(e){return n(Object(s.d)(e))}}}))((function(n){var e=n.cartItem,t=n.clearItem,a=n.addItem,i=n.removeItem,c=e.name,l=e.imageUrl,u=e.price,o=e.quantity;return r.a.createElement(E,null,r.a.createElement(w,null,r.a.createElement("img",{src:l,alt:"item"})),r.a.createElement(y,null,c),r.a.createElement(O,null,r.a.createElement("div",{onClick:function(){return i(e)}},"\u276e"),r.a.createElement("span",null,o),r.a.createElement("div",{onClick:function(){return a(e)}},"\u276f")),r.a.createElement(y,null,u),r.a.createElement(j,{onClick:function(){return t(e)}},"\u2715"))})),I=t(30);function P(){var n=Object(p.a)(["\n  text-align: center;\n  margin-top: 40px;\n  font-size: 24px;\n  color: red;\n"]);return P=function(){return n},n}function z(){var n=Object(p.a)(["\n  margin-top: 30px;\n  margin-left: auto;\n  font-size: 36px;\n"]);return z=function(){return n},n}function C(){var n=Object(p.a)(["\n  text-transform: capitalize;\n  width: 23%;\n  &:last-child {\n    width: 8%;\n  }\n  @media screen and (max-width: 800px) {\n    width: 22%\n    &:last-child {\n      width: 12%;\n    }\n  }\n"]);return C=function(){return n},n}function A(){var n=Object(p.a)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid darkgrey;\n"]);return A=function(){return n},n}function J(){var n=Object(p.a)(["\n  width: 55%;\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 50px auto 0;\n  button {\n    margin-left: auto;\n    margin-top: 50px;\n  }\n  @media screen and (max-width: 800px) {\n    width: 90%;\n  }\n"]);return J=function(){return n},n}var L=f.c.div(J()),N=f.c.div(A()),T=f.c.div(C()),U=f.c.div(z()),R=f.c.div(P()),S=Object(c.b)({cartItems:I.b,total:I.d});e.default=Object(i.b)(S)((function(n){var e=n.cartItems,t=n.total;return r.a.createElement(L,null,r.a.createElement(N,null,r.a.createElement(T,null,r.a.createElement("span",null,"Product")),r.a.createElement(T,null,r.a.createElement("span",null,"Description")),r.a.createElement(T,null,r.a.createElement("span",null,"Quantity")),r.a.createElement(T,null,r.a.createElement("span",null,"Price")),r.a.createElement(T,null,r.a.createElement("span",null,"Remove"))),e.map((function(n){return r.a.createElement(k,{key:n.id,cartItem:n})})),r.a.createElement(U,null,"TOTAL: $",t),r.a.createElement(R,null,"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"),r.a.createElement(d,{price:t}))}))}}]);
//# sourceMappingURL=6.e93fd0a3.chunk.js.map