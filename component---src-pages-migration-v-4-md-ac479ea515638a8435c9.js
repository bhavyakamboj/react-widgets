webpackJsonp(["component---src-pages-migration-v-4-md"],{'./node_modules/babel-loader/lib/index.js?{"presets":[["/Users/jason/src/react-widgets/node_modules/babel-preset-jason/index.js",{"debug":false,"targets":{"browsers":["> 1%","last 4 versions","not ie < 9"]}}],["/Users/jason/src/react-widgets/www/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/jason/src/react-widgets/www/node_modules/babel-preset-stage-0/lib/index.js","/Users/jason/src/react-widgets/www/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/jason/src/react-widgets/www/node_modules/babel-plugin-remove-graphql-queries/index.js","/Users/jason/src/react-widgets/node_modules/babel-plugin-transform-decorators-legacy/lib/index.js","/Users/jason/src/react-widgets/www/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./plugins/gatsby-plugin-jsxtreme-markdown/loader.js!./src/pages/migration-v4.md':function(e,t,a){"use strict";var n=a("./node_modules/react/react.js"),s=a("./node_modules/react-helmet/lib/Helmet.js").default;a("./src/components/EditableExample.js").default,a("./src/components/TabbedCodeBlock.js").default;e.exports=function(e){var t=(e.scope,e.style),a=e.className;return n.createElement("section",{className:a,style:t},n.createElement(s,{title:"migration-v4"}),n.createElement("div",null,n.createElement("h3",null,"Localizers (I18n)"),n.createElement("p",null,"In the past ",n.createElement("code",null,"react-widgets")," included a set of localizers for use with popular I18n libraries like Globalize and moment.js. One issue with this approach is that we couldn't iterate on those parts of hte package without needing to bump the version of all of ",n.createElement("code",null,"react-widgets"),". If a localizer needed a breaking change it'd have to wait until the whole package bumped a major version."),n.createElement("p",null,"To address that in v4 we've split the localizers out into their own packages. They are still maintained and developed along with react-widgets, but are individually installable via npm. The maintained core ones are:"),n.createElement("ul",null,n.createElement("li",null,n.createElement("code",null,"react-widgets-moment")),n.createElement("li",null,n.createElement("code",null,"react-widgets-globalize")),n.createElement("li",null,n.createElement("code",null,"react-widgets-simple-number"))),n.createElement("h3",null,"CSS Classes"),n.createElement("p",null,"The large majority of breaking changes are css related. Many classes have been removed or renamed to provide more modular and themeable default styles. Please check out the ",n.createElement("code",null,"variables.less")," (or scss) file for new or different less/sass variables"),n.createElement("p",null,"And poke around the widget DOM structures in the dev tools to get a sense of what has changed. If you have custom styles it should be fairly apparent (and easily fixable) what is wrong."),n.createElement("h3",null,"Default styles"),n.createElement("p",null,"Along with reworking the css we've also taken the time to update and refresh the default styles of each widget. They should be a bit more polished and clean out of the box for quick prototyping, as well as easier to theme."),n.createElement("h3",null,"Props"),n.createElement("h4",null,"Calendar: ",n.createElement("code",null,"initialView")," and ",n.createElement("code",null,"finalView")),n.createElement("p",null,"These have been replaced with the ",n.createElement("code",null,"views")," prop which provides a lot more freedom in defining what views the Calendar starts or ends on and in what order."),n.createElement("h4",null,n.createElement("code",null,"duration")," speed for animations"),n.createElement("p",null,"Programmatic ",n.createElement("code",null,"duration")," has been removed, in favor of 100% CSS specified animations. To change the duration of all popup enter and exiting speeds, adjust it via CSS."),n.createElement("p",null,n.createElement("strong",null,"For Popups"),":"),n.createElement("pre",{className:"pg-code-section"},n.createElement("code",{className:"language-css"},n.createElement("span",{className:"token selector"},".rw-popup-transition")," ",n.createElement("span",{className:"token punctuation"},"{"),"\n","  ",n.createElement("span",{className:"token property"},"transition-duration"),n.createElement("span",{className:"token punctuation"},":")," 400ms",n.createElement("span",{className:"token punctuation"},";"),"\n",n.createElement("span",{className:"token punctuation"},"}"),"\n")),n.createElement("p",null,"Or if you want to control it per component use a className and selector."),n.createElement("pre",{className:"pg-code-section"},n.createElement("code",{className:"language-css"},n.createElement("span",{className:"token selector"},".my-slower-dropdown .rw-popup-transition")," ",n.createElement("span",{className:"token punctuation"},"{"),"\n","  ",n.createElement("span",{className:"token property"},"transition-duration"),n.createElement("span",{className:"token punctuation"},":")," 400ms",n.createElement("span",{className:"token punctuation"},";"),"\n",n.createElement("span",{className:"token punctuation"},"}"),"\n")),n.createElement("p",null,n.createElement("strong",null,"For Calendar transitions"),":"),n.createElement("pre",{className:"pg-code-section"},n.createElement("code",{className:"language-css"},n.createElement("span",{className:"token selector"},".rw-calendar-transition")," ",n.createElement("span",{className:"token punctuation"},"{"),"\n","  ",n.createElement("span",{className:"token property"},"transition-duration"),n.createElement("span",{className:"token punctuation"},":")," 400ms",n.createElement("span",{className:"token punctuation"},";"),"\n",n.createElement("span",{className:"token punctuation"},"}"),"\n")),n.createElement("p",null,"Or"),n.createElement("pre",{className:"pg-code-section"},n.createElement("code",{className:"language-css"},n.createElement("span",{className:"token selector"},".my-calendar .rw-calendar-transition")," ",n.createElement("span",{className:"token punctuation"},"{"),"\n","  ",n.createElement("span",{className:"token property"},"transition-duration"),n.createElement("span",{className:"token punctuation"},":")," 400ms",n.createElement("span",{className:"token punctuation"},";"),"\n",n.createElement("span",{className:"token punctuation"},"}"),"\n"))))}}});
//# sourceMappingURL=component---src-pages-migration-v-4-md-ac479ea515638a8435c9.js.map