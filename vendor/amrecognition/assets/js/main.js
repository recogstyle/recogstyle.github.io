(()=>{
    var e = {
        15: ()=>{
            document.querySelectorAll(".accordion").forEach((e=>{
                const t = e.querySelector(".accordion-btn")
                  , s = e.querySelector(".accordion-content");
                t.addEventListener("click", (()=>{
                    const o = t.dataset.toggleText;
                    o && (t.dataset.toggleText = t.innerHTML,
                    t.innerHTML = o),
                    e.classList.contains("accordion--active") ? (t.classList.remove("accordion-btn--active"),
                    s.style.height = `${s.scrollHeight}px`,
                    e.classList.add("accordion--activating"),
                    setTimeout((()=>s.style.height = "0px"))) : (t.classList.add("accordion-btn--active"),
                    e.classList.add("accordion--activating"),
                    s.style.height = `${s.scrollHeight}px`)
                }
                )),
                s.addEventListener("transitionend", (t=>{
                    t.target === s && (e.classList.remove("accordion--activating"),
                    e.classList.contains("accordion--active") ? e.classList.remove("accordion--active") : (s.setAttribute("style", ""),
                    e.classList.add("accordion--active")))
                }
                ))
            }
            ))
        }
        ,
        874: ()=>{
            const e = document.querySelector(".admin-menu");
            if (e) {
                e.querySelectorAll(".admin-menu__item--has-children").forEach((t=>{
                    t.querySelector(".admin-menu__link:not(.admin-menu__link--sub)").addEventListener("click", (()=>{
                        const s = e.querySelector(".admin-menu__item--active");
                        s && s.classList.remove("admin-menu__item--active"),
                        s !== t && t.classList.add("admin-menu__item--active")
                    }
                    ))
                }
                ))
            }
        }
        ,
        62: ()=>{
            document.querySelectorAll(".awards-row").forEach((e=>{
                const t = e.querySelectorAll(".awards-row__item--more, .awards-row__mobile-more")
                  , s = e.querySelector(".awards-row__mobile-more");
                t.forEach((t=>{
                    t.addEventListener("click", (()=>{
                        e.classList.toggle("awards-row--active");
                        const t = s.dataset.toggleText;
                        t && (s.dataset.toggleText = s.innerHTML,
                        s.innerHTML = t)
                    }
                    ))
                }
                ))
            }
            ))
        }
        ,
        303: ()=>{
            const e = document.body;
            (e.classList.contains("body--desktop") || e.classList.contains("body--admin")) && window.addEventListener("scroll", (()=>{
                const e = -window.scrollX;
                document.querySelectorAll("\n      .header,\n      .admin-navbar,\n      .popup,\n      .menu,\n      .stories,\n      .wallet__btns-box\n    ").forEach((t=>{
                    t.style.transform = `translateX(${e}px)`
                }
                ))
            }
            ))
        }
        ,
        65: ()=>{
            document.querySelectorAll(".js-file-input").forEach((e=>{
                e.addEventListener("change", (()=>{
                    const t = e.dataset.fileOutput;
                    if (!t)
                        return;
                    document.querySelector(`.js-file-value[data-file-output="${t}"]`).innerText = e.files[0].name
                }
                ))
            }
            ))
        }
        ,
        769: (e,t,s)=>{
            "use strict";
            s(303),
            s(936);
            function o(e) {
                if (document.body.classList.contains("body--desktop"))
                    return;
                const {element: t, from: s, to: o, width: r, fromInsertType: n="append", toInsertType: i="append"} = e
                  , a = document.querySelectorAll(t)
                  , c = document.querySelector(s)
                  , l = document.querySelector(o);
                c && l && a.forEach((e=>{
                    setTimeout((()=>{
                        window.innerWidth <= r && e.parentNode === c ? l[i](e) : window.innerWidth >= r && e.parentNode !== c && c[n](e)
                    }
                    ))
                }
                ))
            }
            function r({text: e, className: t="", delay: s=3e3}) {
                const o = document.createElement("div");
                o.className = `message ${t}`,
                o.innerHTML = e,
                document.body.appendChild(o),
                setTimeout((()=>o.classList.add("message--show")), 10),
                setTimeout((()=>{
                    o.classList.remove("message--show"),
                    o.addEventListener("transitionend", (()=>o.remove()), {
                        once: !0
                    })
                }
                ), s)
            }
            if (document.querySelector(".profile")) {
                n(),
                window.addEventListener("resize", n),
                i(),
                window.addEventListener("resize", i),
                a(),
                window.addEventListener("resize", a),
                c(),
                window.addEventListener("resize", c);
                const e = document.querySelector(".profile__awards-more");
                e?.addEventListener("click", (()=>{
                    e.closest(".profile__awards").classList.toggle("profile__awards--full");
                    const t = e.dataset.toggleText;
                    t && (e.dataset.toggleText = e.innerHTML,
                    e.innerHTML = t)
                }
                ))
            }
            function n() {
                o({
                    element: ".profile__awards--own",
                    from: ".profile__awards-desktop",
                    to: ".profile__awards-mobile",
                    width: 680
                })
            }
            function i() {
                o({
                    element: ".profile__awards--other",
                    from: ".profile__awards-desktop",
                    to: ".profile__awards-mobile",
                    width: 680
                })
            }
            function a() {
                o({
                    element: ".profile__banner--movement",
                    from: ".profile__banners-desktop",
                    to: ".profile__banners-mobile",
                    width: 680
                })
            }
            function c() {
                o({
                    element: ".profile-map",
                    from: ".profile__map-desktop",
                    to: ".profile__map-mobile",
                    width: 680
                })
            }
            s(485),
            s(465),
            s(378),
            s(119);
            var l = s(436);
            document.querySelector(".pay-lines") && new l.ZP(".pay-lines__slider",{
                modules: [l.tl],
                slidesPerView: 1,
                spaceBetween: 20,
                breakpoints: {
                    680: {
                        slidesPerView: 1,
                        enabled: !1
                    }
                },
                pagination: {
                    el: ".pay-lines__slider-pagination",
                    clickable: !0
                }
            });
            s(50),
            s(65);
            const d = document.querySelector(".login-form");
            if (d) {
                const e = d.querySelectorAll(".login-form__input");
                d.addEventListener("submit", (t=>{
                    t.preventDefault();
                    let s = !1;
                    e.forEach((e=>{
                        (function(e) {
                            if (0 === e.value.length)
                                return !1;
                            return !0
                        }
                        )(e) || (s = !0,
                        e.classList.add("input--error"))
                    }
                    )),
                    s && !document.querySelector(".message") ? r({
                        text: "Сообщение об ошибке. Заполните все обязательные поля",
                        className: "message--error",
                        delay: 4e3
                    }) : s || (location.href = "profile.html")
                }
                )),
                e.forEach((e=>{
                    e.addEventListener("focus", (()=>e.classList.remove("input--error")))
                }
                ))
            }
            l.ZP.use([l.tl, l.W_, l.o3]);
            const u = new l.ZP(".single-product__nav-slider",{
                direction: "vertical",
                slidesPerView: "auto",
                spaceBetween: 10
            });
            new l.ZP(".single-product__big-slider",{
                slidesPerView: "auto",
                spaceBetween: 0,
                loop: !0,
                thumbs: {
                    swiper: u
                },
                mousewheel: {
                    sensitivity: 1.4
                },
                navigation: {
                    prevEl: ".single-product__slider-prev",
                    nextEl: ".single-product__slider-next",
                    clickable: !0
                }
            });
            s(15);
            l.ZP.use([l.W_]),
            new l.ZP(".news-about__slider, .news-slider",{
                slidesPerView: "auto",
                spaceBetween: 0,
                navigation: {
                    nextEl: ".news-about__slider-next",
                    prevEl: ".news-about__slider-prev",
                    clickable: !0
                }
            });
            s(874),
            s(62);
            l.ZP.use([l.W_]);
            document.querySelectorAll(".images-slider").forEach((e=>{
                const t = e.querySelector(".images-slider__main");
                new l.ZP(t,{
                    slidesPerView: "auto",
                    spaceBetween: 0,
                    navigation: {
                        nextEl: ".images-slider__next",
                        prevEl: ".images-slider__prev",
                        clickable: !0
                    }
                })
            }
            )),
            new l.ZP(".bot__users-slider",{
                slidesPerView: "auto",
                spaceBetween: 10
            })
        }
        ,
        936: ()=>{
            const e = document.querySelector(".menu");
            if (e) {
                const t = e.querySelector(".menu__close");
                t.addEventListener("click", (()=>function(e) {
                    e?.classList.remove("menu--active"),
                    document.body.classList.remove("body--lock")
                }(e)));
                document.querySelectorAll(".js-open-menu").forEach((s=>{
                    s.addEventListener("click", (()=>{
                        s.dataset.menuCloseClass ? t.classList.add(s.dataset.menuCloseClass) : t.className = "menu__close",
                        function(e) {
                            e?.classList.toggle("menu--active"),
                            document.body.classList.toggle("body--lock")
                        }(e)
                    }
                    ))
                }
                ))
            }
        }
        ,
        119: ()=>{
            let e;
            document.querySelectorAll(".popup").forEach((e=>{
                e.addEventListener("click", (s=>{
                    s.target === e && t(e),
                    s.target.classList.contains("popup__btn") && t(e),
                    s.target.classList.contains("js-close-popup") && t(e)
                }
                ))
            }
            ));
            function t(t) {
                t?.classList.remove("popup--show"),
                document.body.classList.remove("body--lock"),
                clearInterval(e)
            }
            document.querySelectorAll(".js-open-popup").forEach((s=>{
                const o = s.dataset.popupName;
                s.addEventListener("click", (()=>{
                    !function(s) {
                        s?.classList.add("popup--show"),
                        document.body.classList.add("body--lock");
                        const o = +s.dataset.closeDelay
                          , r = s.querySelector(".popup__progress .progress__done");
                        if (o && r) {
                            let n = 0;
                            const i = 1e3 / 60;
                            e = setInterval((()=>{
                                n = Math.min(n + i / o * 100, 100),
                                r.style.width = `${n}%`,
                                100 === n && (t(s),
                                s.addEventListener("transitionend", (()=>{
                                    r.setAttribute("style", "")
                                }
                                ), {
                                    once: !0
                                }))
                            }
                            ), i)
                        } else
                            o && setTimeout((()=>t(s)), o)
                    }(document.querySelector(`.popup[data-popup-name="${o}"]`))
                }
                ))
            }
            ))
        }
        ,
        465: ()=>{
            document.querySelectorAll(".search").forEach((e=>{
                const t = e.querySelector(".search__input");
                t.addEventListener("input", (()=>{
                    "" === t.value || e.classList.contains("search--fill") ? "" === t.value && e.classList.contains("search--fill") && e.classList.remove("search--fill") : e.classList.add("search--fill")
                }
                ));
                e.querySelector(".search__btn--clear")?.addEventListener("click", (()=>{
                    t.value = "",
                    t.focus(),
                    e.classList.remove("search--fill")
                }
                ));
                e.querySelector(".search__open")?.addEventListener("click", (()=>e.classList.toggle("search--active")));
                e.querySelector(".search__btn--close")?.addEventListener("click", (()=>e.classList.remove("search--active")))
            }
            ))
        }
        ,
        378: ()=>{
            const e = document.querySelectorAll(".settings-input--area");
            e.forEach((e=>{
                t(e),
                e.addEventListener("input", (()=>t(e))),
                window.addEventListener("resize", (()=>t(e)))
            }
            ));
            function t(e) {
                const t = function(e) {
                    return e.dataset.minHeight ? +e.dataset.minHeight : window.innerWidth < 680 ? 55 : 90
                }(e);
                e.style.height = `${t}px`;
                const s = Math.max(t, e.scrollHeight);
                e.style.height = `${s}px`
            }
            document.querySelectorAll(".tabs-btn").forEach((s=>{
                s.addEventListener("click", (()=>{
                    setTimeout((()=>{
                        e.forEach((e=>t(e)))
                    }
                    ), 50)
                }
                ))
            }
            ))
        }
        ,
        485: ()=>{
            const e = document.querySelectorAll(".stories")
              , t = [];
            e.forEach((e=>{
                const s = {
                    $el: e,
                    timer: null,
                    activeIndex: 0,
                    delay: e.dataset.storyDelay || 4e3,
                    fps: 60
                };
                t.push(s);
                e.querySelector(".stories__close")?.addEventListener("click", (()=>o(s)));
                e.querySelector(".stories__prev")?.addEventListener("click", (()=>{
                    s.activeIndex = Math.max(s.activeIndex - 1, 0),
                    r(s)
                }
                ));
                e.querySelector(".stories__next")?.addEventListener("click", (()=>{
                    s.activeIndex++,
                    r(s)
                }
                )),
                window.addEventListener("keyup", (e=>{
                    switch (e.key) {
                    case "Escape":
                        o(s);
                        break;
                    case "ArrowLeft":
                        s.activeIndex = Math.max(s.activeIndex - 1, 0),
                        r(s);
                        break;
                    case "ArrowRight":
                        s.activeIndex++,
                        r(s)
                    }
                }
                ))
            }
            ));
            function s(e) {
                let t = 0
                  , s = e.activeIndex;
                const r = 1e3 / e.fps
                  , n = e.$el
                  , i = n.querySelectorAll(".stories__item")
                  , a = n.querySelectorAll(".stories__progress-item");
                for (let e = 0; e < s; e++)
                    a[e].querySelector(".progress__done").style.width = "100%";
                i[s].classList.add("stories__item--active"),
                e.timer = setInterval((()=>{
                    s = e.activeIndex;
                    const n = i[s]
                      , c = i[s + 1]
                      , l = a[s]?.querySelector(".progress__done");
                    l ? (t = Math.min(t + r / e.delay * 100, 100),
                    l.style.width = `${t}%`,
                    t >= 100 && n && c ? (n.classList.remove("stories__item--active"),
                    c.classList.add("stories__item--active"),
                    t = 0,
                    e.activeIndex++) : 100 === t && o(e)) : o(e)
                }
                ), r)
            }
            function o(e) {
                const t = e.$el;
                t.classList.remove("stories--active"),
                document.body.classList.remove("body--lock"),
                t.addEventListener("transitionend", (()=>{
                    t.querySelectorAll(".stories__progress-item .progress__done").forEach((e=>e.setAttribute("style", "")))
                }
                ), {
                    once: !0
                }),
                clearInterval(e.timer);
                t.querySelector(".stories__item--active")?.classList.remove("stories__item--active")
            }
            function r(e) {
                let t = e.activeIndex;
                const r = e.$el;
                r.querySelector(".stories__item--active")?.classList.remove("stories__item--active");
                r.querySelectorAll(".stories__progress-item .progress__done").forEach((e=>e.setAttribute("style", "")));
                const n = r.querySelectorAll(".stories__item")[t];
                n ? (n.classList.add("stories__item--active"),
                clearInterval(e.timer),
                s(e)) : o(e)
            }
            document.querySelectorAll(".js-open-stories-list").forEach((e=>{
                e.querySelectorAll(".js-open-stories").forEach(((o,r)=>{
                    o.addEventListener("click", (()=>{
                        const o = e.dataset.storiesName;
                        let n;
                        n = o ? document.querySelector(`.stories[data-stories-name=${o}`) : document.querySelector(".stories");
                        const i = t.find((e=>e.$el === n));
                        i.activeIndex = r,
                        function(e) {
                            e.$el.classList.toggle("stories--active"),
                            document.body.classList.toggle("body--lock"),
                            s(e)
                        }(i)
                    }
                    ))
                }
                ))
            }
            ))
        }
        ,
        50: ()=>{
            document.querySelectorAll(".tabs-btns").forEach((e=>{
                e.querySelectorAll(".tabs-btn").forEach(((t,s)=>{
                    t.addEventListener("click", (()=>{
                        const t = e.dataset.tabsName
                          , o = document.querySelector(`.tabs-list[data-tabs-name="${t}"]`);
                        if (!o)
                            return;
                        document.querySelectorAll(`.tabs-btns[data-tabs-name="${t}`).forEach((e=>{
                            const t = e.querySelector(".tabs-btn--active")
                              , o = e.querySelectorAll(".tabs-btn")[s];
                            t.classList.remove("tabs-btn--active"),
                            o.classList.add("tabs-btn--active")
                        }
                        ));
                        const r = o.querySelector(".tabs-item--active")
                          , n = o.querySelectorAll(".tabs-item")[s];
                        r?.classList.remove("tabs-item--active"),
                        n.classList.add("tabs-item--active")
                    }
                    ))
                }
                ))
            }
            ))
        }
    }
      , t = {};
    function s(o) {
        if (t[o])
            return t[o].exports;
        var r = t[o] = {
            exports: {}
        };
        return e[o](r, r.exports, s),
        r.exports
    }
    s.m = e,
    s.x = e=>{}
    ,
    s.d = (e,t)=>{
        for (var o in t)
            s.o(t, o) && !s.o(e, o) && Object.defineProperty(e, o, {
                enumerable: !0,
                get: t[o]
            })
    }
    ,
    s.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    (()=>{
        var e = {
            179: 0
        }
          , t = [[769, 436]]
          , o = e=>{}
          , r = (r,n)=>{
            for (var i, a, [c,l,d,u] = n, m = 0, p = []; m < c.length; m++)
                a = c[m],
                s.o(e, a) && e[a] && p.push(e[a][0]),
                e[a] = 0;
            for (i in l)
                s.o(l, i) && (s.m[i] = l[i]);
            for (d && d(s),
            r && r(n); p.length; )
                p.shift()();
            return u && t.push.apply(t, u),
            o()
        }
          , n = globalThis.webpackChunkam_recognition = globalThis.webpackChunkam_recognition || [];
        function i() {
            for (var o, r = 0; r < t.length; r++) {
                for (var n = t[r], i = !0, a = 1; a < n.length; a++) {
                    var c = n[a];
                    0 !== e[c] && (i = !1)
                }
                i && (t.splice(r--, 1),
                o = s(s.s = n[0]))
            }
            return 0 === t.length && (s.x(),
            s.x = e=>{}
            ),
            o
        }
        n.forEach(r.bind(null, 0)),
        n.push = r.bind(null, n.push.bind(n));
        var a = s.x;
        s.x = ()=>(s.x = a || (e=>{}
        ),
        (o = i)())
    }
    )();
    s.x()
}
)();
