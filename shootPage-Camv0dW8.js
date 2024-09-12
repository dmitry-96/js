import {u as Ne, a as E, e as A, aL as nt, aM as lt, aN as rt, aO as dt, aP as ct, aQ as ht, U as O, f as ve, aR as Xe, h as Oe, aS as mt, aT as pt, aU as ut, aV as gt, aW as ft, aX as vt, aY as bt, aZ as wt, a_ as _t, a$ as yt, b0 as $t, b1 as Ct, b2 as Tt, b3 as kt, b4 as Dt, b5 as Pt, b6 as qe} from "./csjsapi-BdAmpf_X.js";
import {c as Je} from "./config-BwcF7KOI.js";
import {u as D} from "./user-store-k9zmIGvd.js";
import {u as Lt} from "./layout-CUAnm6RO.js";
import {d as Y, _ as Q, g as M, o as c, c as p, p as k, q as T, a, b as B, t as m, A as j, j as f, s as re, u as de, w as _, v as C, z as oe, D as be, F as W, h as H, k as v, l as F, K as It, ad as At, T as se, n as U, af as St, L as Et} from "./vendor-Dj3m2Pyo.js";
import {O as Ze, P as Mt, Q as Ut, d as je, R as Rt, S as We, T as Ft, U as Bt} from "./sapi-USPE3YK4.js";
const Vt = Y({
    name: "fileUpload",
    components: {},
    props: {
        TAG: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            isInWhiteList: Lt().obj.web_toc_camera_shoot,
            currentState: "uploading",
            uploadSccess: 0,
            uploadErr: 0,
            uploadLock: 0,
            currentUpload: 0,
            showDialog: !1,
            toggle: !0,
            token: "",
            fileApiList: [],
            fileSelectList: [],
            fileUpList: [],
            fetchAll: "",
            isDomestic: !1,
            entryDom: "",
            dirType: 0
        }
    },
    watch: {
        $route: function() {
            this.getDirType()
        }
    },
    computed: {
        imgType() {
            return Je.uploadImgType
        },
        canUploadOfficeFile() {
            let e = !1;
            return typeof this.dirType != "string" && [0, 102, 103, 104].includes(this.dirType) && (e = !0),
            e
        }
    },
    methods: {
        getDirType() {
            var i, s;
            const e = this.$route.query.path ? this.$route.query.path.split(",").pop() || "" : "root";
            let t = 0;
            (i = Ne().dirMap[e]) != null && i.duuid ? t = "share" : t = ((s = Ne().dirMap[e]) == null ? void 0 : s.dir_type) || 0,
            this.dirType = t
        },
        uploadFile(e) {
            const t = this;
            let i;
            e === "pic" ? i = t.$refs.selectPicFile : e === "pdf" ? i = t.$refs.selectPdfFile : e === "ppt" ? i = t.$refs.selectPptFile : e === "word" ? i = t.$refs.selectWordFile : e === "excel" ? i = t.$refs.selectExcelFile : e === "all" && (i = t.$refs.selectAllFile),
            E(this.TAG, "upload", "upload_" + e);
            const s = Array.from(i.files);
            e === "pic" && this.isInWhiteList ? (E("CSEnhancePC", "upload"),
            s.length > 50 ? A.emit("toast", {
                msg: "最多50张图片"
            }) : this.$emit("files", s)) : s.length !== 0 && A.emit("uploadFile", {
                data: s,
                flag: !0,
                token: this.token,
                isDomestic: this.isDomestic
            }),
            setTimeout( () => {
                i.value = ""
            }
            , 1e3)
        },
        init() {
            this.$emit("init")
        },
        resetInput() {
            this.$refs.selectPicFile && (this.$refs.selectPicFile.value = ""),
            this.$refs.selectPdfFile && (this.$refs.selectPdfFile.value = ""),
            this.$refs.selectPptFile && (this.$refs.selectPptFile.value = ""),
            this.$refs.selectWordFile && (this.$refs.selectWordFile.value = ""),
            this.$refs.selectExcelFile && (this.$refs.selectExcelFile.value = "")
        },
        eventStop(e) {
            e.stopPropagation(),
            e.preventDefault(),
            (e.type === "drop" || e.type === "dragleave") && e.target === this.entryDom && (document.getElementsByClassName("file_drop")[0].style.display = "none",
            document.getElementsByClassName("route-dom")[0].style.opacity = "1"),
            e.type === "dragenter" && (this.entryDom = e.target,
            document.getElementsByClassName("file_drop")[0].style.display = "flex",
            document.getElementsByClassName("route-dom")[0].style.opacity = "0.2")
        },
        dropUpload(e) {
            this.eventStop(e);
            const t = [];
            [].forEach.call(e.dataTransfer.files, function(s) {
                t.push(s)
            }, !1),
            t.length !== 0 && A.emit("uploadFile", {
                data: t,
                flag: !0,
                token: this.token,
                isDomestic: this.isDomestic
            })
        },
        destroyDrop() {
            const e = this;
            document.removeEventListener("drop", e.dropUpload, !1),
            document.removeEventListener("dragleave", e.eventStop),
            document.removeEventListener("dragenter", e.eventStop),
            document.removeEventListener("dragover", e.eventStop)
        }
    },
    created() {
        this.token = D().token,
        this.isDomestic = D().isDomestic
    },
    mounted() {
        const e = this;
        A.on("resetInput", () => {
            e.resetInput()
        }
        ),
        A.on("initFiles", () => {
            e.init()
        }
        ),
        document.addEventListener("drop", e.dropUpload, !1),
        document.addEventListener("dragleave", e.eventStop),
        document.addEventListener("dragenter", e.eventStop),
        document.addEventListener("dragover", e.eventStop)
    },
    beforeUnmount() {
        A.off("resetInput"),
        A.off("initFiles"),
        this.destroyDrop()
    }
})
  , z = e => (re("data-v-219774be"),
e = e(),
de(),
e)
  , Nt = {
    class: "upload_wrap"
}
  , Ot = {
    class: "btn_green new_btn"
}
  , jt = z( () => a("span", {
    class: "icon-ic_maintop_upload"
}, null, -1))
  , Wt = z( () => a("img", {
    src: nt,
    alt: ""
}, null, -1))
  , Ht = {
    class: "li_item"
}
  , zt = ["accept"]
  , Gt = z( () => a("img", {
    src: lt,
    alt: ""
}, null, -1))
  , Kt = {
    class: "li_item"
}
  , Yt = z( () => a("img", {
    src: rt,
    alt: ""
}, null, -1))
  , Qt = {
    class: "li_item"
}
  , Xt = z( () => a("img", {
    src: dt,
    alt: ""
}, null, -1))
  , qt = {
    class: "li_item"
}
  , Jt = z( () => a("img", {
    src: ct,
    alt: "icon"
}, null, -1))
  , Zt = {
    class: "li_item"
}
  , xt = z( () => a("img", {
    src: ht,
    alt: "icon"
}, null, -1));
function ei(e, t, i, s, o, l) {
    const n = M("el-dropdown-item")
      , r = M("el-dropdown-menu")
      , h = M("el-dropdown");
    return c(),
    p("div", Nt, [k(h, {
        trigger: "click",
        "hide-on-click": !0,
        placement: "bottom-start"
    }, {
        dropdown: T( () => [k(r, {
            slot: "dropdown"
        }, {
            default: T( () => [k(n, null, {
                default: T( () => [a("span", Ht, [a("input", {
                    class: "btn_upload",
                    type: "file",
                    onChange: t[0] || (t[0] = u => e.uploadFile("pic")),
                    ref: "selectPicFile",
                    multiple: "",
                    accept: e.imgType
                }, null, 40, zt), Gt, B(" " + m(e.$t("web_3_upload_jpg")), 1)])]),
                _: 1
            }), k(n, null, {
                default: T( () => [a("span", Kt, [a("input", {
                    class: "btn_upload",
                    type: "file",
                    onChange: t[1] || (t[1] = u => e.uploadFile("pdf")),
                    ref: "selectPdfFile",
                    multiple: "",
                    accept: ".pdf"
                }, null, 544), Yt, B(" " + m(e.$t("web_3_upload_pdf")), 1)])]),
                _: 1
            }), k(n, null, {
                default: T( () => [a("span", Qt, [a("input", {
                    class: "btn_upload",
                    type: "file",
                    onChange: t[2] || (t[2] = u => e.uploadFile("ppt")),
                    ref: "selectPptFile",
                    multiple: "",
                    accept: ".ppt, .pptx"
                }, null, 544), Xt, B(" " + m(e.$t("web_3_upload_ppt")), 1)])]),
                _: 1
            }), e.canUploadOfficeFile ? (c(),
            j(n, {
                key: 0
            }, {
                default: T( () => [a("span", qt, [a("input", {
                    class: "btn_upload",
                    type: "file",
                    onChange: t[3] || (t[3] = u => e.uploadFile("word")),
                    ref: "selectWordFile",
                    multiple: "",
                    accept: ".doc, .docx"
                }, null, 544), Jt, B(" " + m(e.$t("cs_632_cloud_06")), 1)])]),
                _: 1
            })) : f("", !0), e.canUploadOfficeFile ? (c(),
            j(n, {
                key: 1
            }, {
                default: T( () => [a("span", Zt, [a("input", {
                    class: "btn_upload",
                    type: "file",
                    onChange: t[4] || (t[4] = u => e.uploadFile("excel")),
                    ref: "selectExcelFile",
                    multiple: "",
                    accept: ".xls, .xlsx"
                }, null, 544), xt, B(" " + m(e.$t("cs_632_cloud_07")), 1)])]),
                _: 1
            })) : f("", !0)]),
            _: 1
        })]),
        default: T( () => [a("div", Ot, [jt, a("span", null, m(e.$t("web_3_upload")), 1), Wt])]),
        _: 1
    })])
}
const Ko = Q(Vt, [["render", ei], ["__scopeId", "data-v-219774be"]])
  , ti = Y({
    props: ["show"],
    data() {
        return {
            newTagName: "",
            tagArray: [],
            tagMap: {},
            ajaxAddTag: !1,
            ajaxUpdateTag: !1,
            ajaxDeleteTag: !1
        }
    },
    created() {
        const e = this;
        e.tagArray = O().tagArray;
        const t = O().tagMap;
        for (let i = 0; i < e.tagArray.length; i++) {
            const s = e.tagArray[i];
            e.tagMap[s] = {
                title: t[s].title,
                isEdit: !1,
                titleEdit: t[s].title,
                deleteConfirm: !1
            }
        }
    },
    watch: {},
    directives: {
        focus: {
            mounted: function(e) {
                e.focus(),
                e.select()
            }
        }
    },
    methods: {
        clearAll() {
            const e = this;
            for (let t = 0; t < e.tagArray.length; t++) {
                const i = e.tagArray[t];
                e.tagMap[i].isEdit = !1,
                e.tagMap[i].deleteConfirm = !1
            }
        },
        checkName(e) {
            const t = this
              , i = [];
            for (let s = 0; s < t.tagArray.length; s++) {
                const o = t.tagArray[s];
                i.push(t.tagMap[o].title.trim())
            }
            return i.indexOf(e) === -1
        },
        addTag() {
            const e = this;
            if (!e.newTagName.trim()) {
                e.$emit("toast", e.$t("web_3_not_empty"));
                return
            }
            const t = e.newTagName.trim();
            if (!ve(t))
                return e.$emit("toast", e.$t("web_3_rename_special")),
                !1;
            if (!e.checkName(t)) {
                e.$emit("toast", e.$t("web_3_labelname_exist"));
                return
            }
            if (e.ajaxAddTag)
                return;
            e.ajaxAddTag = !0;
            const s = Xe(24);
            Ze(D().token, D().isDomestic, s, t).then(o => {
                O().reset(),
                e.ajaxAddTag = !1,
                o && o.status === 0 && (e.tagArray.unshift(s),
                e.tagMap[s] = {
                    title: t,
                    isEdit: !1,
                    titleEdit: t,
                    deleteConfirm: !1
                },
                e.newTagName = "")
            }
            ).catch( () => {
                e.ajaxAddTag = !1
            }
            )
        },
        editTag(e) {
            this.clearAll(),
            this.tagMap[e].isEdit = !0
        },
        confirmEdit(e) {
            const t = this
              , i = t.tagMap[e].titleEdit.trim();
            if (!i)
                return t.$emit("toast", t.$t("web_3_not_empty")),
                !1;
            if (i === t.tagMap[e].title) {
                t.tagMap[e].isEdit = !1;
                return
            }
            if (!ve(i))
                return t.$emit("toast", t.$t("web_3_rename_special")),
                !1;
            if (!t.checkName(i)) {
                t.$emit("toast", t.$t("web_3_labelname_exist"));
                return
            }
            t.ajaxUpdateTag || (t.ajaxUpdateTag = !0,
            Mt(D().token, D().isDomestic, e, i).then(o => {
                O().reset(),
                t.ajaxUpdateTag = !1,
                o && o.status === 0 && (t.tagMap[e].title = i,
                t.tagMap[e].isEdit = !1)
            }
            ).catch( () => {
                t.ajaxUpdateTag = !1
            }
            ))
        },
        cancelEdit(e) {
            this.tagMap[e].isEdit = !1
        },
        deleteTag(e) {
            this.clearAll(),
            this.tagMap[e].deleteConfirm = !0
        },
        confirmDeleteTag(e) {
            const t = this;
            t.ajaxDeleteTag || (t.ajaxDeleteTag = !0,
            Ut(D().token, D().isDomestic, e).then(i => {
                if (O().reset(),
                t.ajaxDeleteTag = !1,
                i && i.status === 0) {
                    const s = t.tagArray.indexOf(e);
                    t.tagArray.splice(s, 1),
                    delete t.tagMap[e]
                }
            }
            ).catch( () => {
                t.ajaxDeleteTag = !1
            }
            ))
        },
        close() {
            this.$emit("close")
        }
    }
})
  , ie = e => (re("data-v-11142b99"),
e = e(),
de(),
e)
  , ii = {
    class: "tag_dialog"
}
  , si = {
    class: "title"
}
  , ai = ie( () => a("span", {
    class: "icon-ic_rename_delete"
}, null, -1))
  , oi = [ai]
  , ni = {
    class: "tag_wrap"
}
  , li = {
    class: "new_wrap"
}
  , ri = {
    class: "tag_title"
}
  , di = {
    class: "input_wrap"
}
  , ci = ["placeholder"]
  , hi = {
    class: "my_wrap"
}
  , mi = {
    class: "tag_title"
}
  , pi = {
    class: "tag_list"
}
  , ui = {
    key: 0,
    class: "tag_empty"
}
  , gi = {
    key: 0,
    class: "tag_name"
}
  , fi = ["onUpdate:modelValue", "onKeyup"]
  , vi = {
    class: "tag_opts"
}
  , bi = ["onClick"]
  , wi = ie( () => a("span", {
    class: "icon-ic_tag_edit"
}, null, -1))
  , _i = [wi]
  , yi = ["onClick"]
  , $i = ie( () => a("span", {
    class: "icon-ic_trashbin_delete"
}, null, -1))
  , Ci = [$i]
  , Ti = ["onClick"]
  , ki = ie( () => a("span", {
    class: "green icon-ic_tag_rename_confirm"
}, null, -1))
  , Di = [ki]
  , Pi = ["onClick"]
  , Li = ie( () => a("span", {
    class: "red icon-ic_tag_rename_cancel"
}, null, -1))
  , Ii = [Li]
  , Ai = ["onClick"];
function Si(e, t, i, s, o, l) {
    return _((c(),
    p("div", {
        class: "mask",
        onClick: t[4] || (t[4] = v( () => {}
        , ["stop"]))
    }, [a("div", ii, [a("div", si, m(e.$t("web_3_label_manage")), 1), a("div", {
        class: "esc",
        onClick: t[0] || (t[0] = (...n) => e.close && e.close(...n))
    }, oi), a("div", ni, [a("div", li, [a("div", ri, m(e.$t("web_3_label_new")), 1), a("div", di, [_(a("input", {
        class: "new_tag_input",
        "onUpdate:modelValue": t[1] || (t[1] = n => e.newTagName = n),
        placeholder: e.$t("web_3_remark_addtips"),
        onKeyup: t[2] || (t[2] = oe( (...n) => e.addTag && e.addTag(...n), ["enter"]))
    }, null, 40, ci), [[be, e.newTagName]]), a("div", {
        class: "btn_green",
        onClick: t[3] || (t[3] = (...n) => e.addTag && e.addTag(...n))
    }, [a("span", null, m(e.$t("web_3_label_add")), 1)])])]), a("div", hi, [a("div", mi, m(e.$t("web_3_label_added")), 1), a("div", pi, [e.tagArray.length === 0 ? (c(),
    p("div", ui, m(e.$t("web_3_label_empty")), 1)) : f("", !0), (c(!0),
    p(W, null, H(e.tagArray, n => {
        var r;
        return c(),
        p("div", {
            class: "tag_column",
            key: n
        }, [_(a("div", {
            class: "tag_name"
        }, m(((r = e.tagMap[n]) == null ? void 0 : r.title) || ""), 513), [[C, !e.tagMap[n].isEdit]]), e.tagMap[n].isEdit ? (c(),
        p("div", gi, [_(a("input", {
            class: "title_edit",
            type: "text",
            "onUpdate:modelValue": h => e.tagMap[n].titleEdit = h,
            onKeyup: [oe(h => e.confirmEdit(n), ["enter"]), oe(h => e.cancelEdit(n), ["esc"])]
        }, null, 40, fi), [[be, e.tagMap[n].titleEdit]])])) : f("", !0), a("div", vi, [_(a("div", {
            class: "opt",
            onClick: h => e.editTag(n)
        }, _i, 8, bi), [[C, !e.tagMap[n].isEdit]]), _(a("div", {
            class: "opt",
            onClick: h => e.deleteTag(n)
        }, Ci, 8, yi), [[C, !e.tagMap[n].isEdit]]), _(a("div", {
            class: "opt",
            onClick: h => e.confirmEdit(n)
        }, Di, 8, Ti), [[C, e.tagMap[n].isEdit]]), _(a("div", {
            class: "opt",
            onClick: h => e.cancelEdit(n)
        }, Ii, 8, Pi), [[C, e.tagMap[n].isEdit]]), _(a("div", {
            class: "confirm_delete",
            onClick: h => e.confirmDeleteTag(n)
        }, m(e.$t("web_3_label_delete")), 9, Ai), [[C, e.tagMap[n].deleteConfirm]])])])
    }
    ), 128))])])])])], 512)), [[C, e.show]])
}
const Ei = Q(ti, [["render", Si], ["__scopeId", "data-v-11142b99"]])
  , Mi = Y({
    components: {
        tagDialog: Ei
    },
    props: ["TAG", "show", "currentDocId"],
    data() {
        return {
            newTagName: "",
            ajaxAddTag: !1,
            tagArray: [],
            docTagArray: [],
            whenExpand: !1,
            showMore: !1,
            showTagDialog: !1
        }
    },
    computed: {
        tagMap() {
            return O().tagMap || {}
        }
    },
    watch: {
        show() {
            this.showTag()
        }
    },
    methods: {
        showTag() {
            const e = this;
            if (e.newTagName = "",
            e.whenExpand = !1,
            e.tagArray = O().tagArray || [],
            e.docTagArray = [],
            typeof e.currentDocId == "string") {
                const t = Oe().docMap[e.currentDocId];
                e.docTagArray = t.tag_ids ? t.tag_ids.split(",") : []
            } else
                e.currentDocId.map(i => Oe().docMap[i]).map(i => {
                    i.tag_ids && i.tag_ids.split(",").map(s => e.docTagArray.push(s))
                }
                ),
                e.docTagArray = Array.from(new Set(e.docTagArray));
            e.measureTag()
        },
        closeTagDialog() {
            const e = this;
            e.showTagDialog = !1
        },
        checkName(e) {
            const t = this;
            let i = !0;
            for (let s = 0; s < t.tagArray.length; s++)
                if (t.tagMap[t.tagArray[s]].title.trim() === e) {
                    i = !1;
                    break
                }
            return i
        },
        addTag() {
            const e = this;
            if (e.ajaxAddTag)
                return;
            const t = e.newTagName.trim();
            if (!t) {
                e.$emit("toast", e.$t("web_3_not_empty"));
                return
            }
            if (!ve(t))
                return e.$emit("toast", e.$t("web_3_rename_special")),
                !1;
            if (!e.checkName(t)) {
                e.$emit("toast", e.$t("web_3_labelname_exist"));
                return
            }
            e.ajaxAddTag = !0;
            const s = Xe(24);
            Ze(D().token, D().isDomestic, s, t).then(o => {
                e.ajaxAddTag = !1,
                o && o.status === 0 && (e.tagArray.push(s),
                e.tagMap[s] = {
                    title: t,
                    id: s
                },
                e.useTag(s),
                E(this.TAG, "label", "folder_success")),
                e.newTagName = ""
            }
            ).catch( () => {
                e.newTagName = "",
                e.ajaxAddTag = !1,
                E(this.TAG, "label", "folder_failed")
            }
            )
        },
        measureTag() {
            const e = this;
            e.$nextTick( () => {
                for (let t = 0; t < e.docTagArray.length; t++)
                    e.tagMap[e.docTagArray[t]].hide = !1;
                e.showMore = !1,
                e.$nextTick( () => {
                    const t = document.querySelectorAll(".use_tag");
                    for (let i = 0; i < t.length; i++)
                        t[i].offsetTop > 130 || t[i].offsetTop >= 125 && t[i].offsetTop <= 130 && 506 - t[i].offsetLeft - t[i].offsetWidth < 87 ? (e.showMore || (e.showMore = !0),
                        e.tagMap[t[i].id].hide = !0) : e.tagMap[t[i].id].hide = !1
                }
                )
            }
            )
        },
        abandonTag(e) {
            const t = this;
            t.docTagArray.splice(t.docTagArray.indexOf(e), 1),
            t.measureTag()
        },
        useTag(e) {
            const t = this;
            t.docTagArray.indexOf(e) === -1 && (t.docTagArray.push(e),
            t.measureTag())
        },
        expandTag() {
            const e = this;
            e.whenExpand = !e.whenExpand
        },
        confirm() {
            const e = this
              , t = e.docTagArray.join(",");
            typeof e.currentDocId == "string" ? je(D().token, D().isDomestic, e.currentDocId, t).then( () => {
                e.$emit("toast", e.$t("cs_save_share_ok"), "success")
            }
            ) : e.currentDocId.map(i => {
                je(D().token, D().isDomestic, i, t).then( () => {
                    e.$emit("toast", e.$t("cs_save_share_ok"), "success")
                }
                )
            }
            ),
            e.$emit("close")
        },
        close() {
            this.$emit("close")
        },
        showToast(e, t, i, s) {
            A.emit("toast", {
                msg: e,
                type: t,
                closeTimeout: i,
                desc: s
            })
        },
        toTagManager() {
            this.showTagDialog = !0
        }
    }
})
  , ce = e => (re("data-v-93431118"),
e = e(),
de(),
e)
  , Ui = {
    class: "tag_dialog"
}
  , Ri = {
    class: "title"
}
  , Fi = ce( () => a("span", {
    class: "icon-ic_rename_delete"
}, null, -1))
  , Bi = [Fi]
  , Vi = {
    class: "tag_wrap"
}
  , Ni = {
    class: "new_wrap"
}
  , Oi = {
    class: "tag_title"
}
  , ji = {
    class: "input_wrap"
}
  , Wi = ["placeholder"]
  , Hi = ce( () => a("div", {
    class: "new_tag_icon"
}, null, -1))
  , zi = {
    class: "my_wrap"
}
  , Gi = {
    key: 0,
    class: "my_tag my_empty_tag"
}
  , Ki = ["id"]
  , Yi = {
    class: "tag_text"
}
  , Qi = ["onClick"]
  , Xi = {
    class: "more_text"
}
  , qi = ce( () => a("div", {
    class: "expand_icon"
}, null, -1))
  , Ji = {
    class: "current_tag_wrap"
}
  , Zi = {
    class: "tag_title"
}
  , xi = {
    class: "tag_list"
}
  , es = {
    key: 0,
    class: "tag_empty"
}
  , ts = ["onClick"]
  , is = {
    key: 0,
    class: "expand_wrap"
}
  , ss = {
    class: "expand"
}
  , as = {
    class: "tag_text"
}
  , os = ["onClick"]
  , ns = {
    class: "expand_btn_wrap"
}
  , ls = {
    class: "btn_wrap"
}
  , rs = ce( () => a("i", {
    class: "icon-ic_account_setting"
}, null, -1));
function ds(e, t, i, s, o, l) {
    const n = M("tagDialog");
    return _((c(),
    p("div", {
        class: "mask",
        onClick: t[9] || (t[9] = v( () => {}
        , ["stop"]))
    }, [a("div", Ui, [a("div", Ri, m(e.$t("web_3_label_setting")), 1), a("div", {
        class: "esc",
        onClick: t[0] || (t[0] = (...r) => e.close && e.close(...r))
    }, Bi), a("div", Vi, [a("div", Ni, [a("div", Oi, m(e.$t("web_3_label_selected")), 1), a("div", ji, [_(a("input", {
        class: "new_tag_input",
        "onUpdate:modelValue": t[1] || (t[1] = r => e.newTagName = r),
        placeholder: e.$t("web_3_remark_addtips"),
        onKeyup: t[2] || (t[2] = oe( (...r) => e.addTag && e.addTag(...r), ["enter"]))
    }, null, 40, Wi), [[be, e.newTagName]]), Hi])]), a("div", zi, [e.docTagArray.length === 0 ? (c(),
    p("div", Gi, m(e.$t("web_3_label_empty")), 1)) : f("", !0), (c(!0),
    p(W, null, H(e.docTagArray, r => (c(),
    p("div", {
        class: "my_tag use_tag",
        key: r,
        id: r,
        style: F({
            display: e.tagMap[r].hide ? "none" : "flex"
        })
    }, [a("div", Yi, m(e.tagMap[r].title), 1), a("div", {
        class: "tag_delete",
        onClick: h => e.abandonTag(r)
    }, null, 8, Qi)], 12, Ki))), 128)), e.docTagArray.length && e.showMore ? (c(),
    p("div", {
        key: 1,
        class: "more_tag",
        onClick: t[3] || (t[3] = (...r) => e.expandTag && e.expandTag(...r))
    }, [a("div", Xi, m(e.$t("web_3_more")), 1), qi])) : f("", !0)]), a("div", Ji, [a("div", Zi, m(e.$t("web_3_label_selecting")), 1), a("div", xi, [e.tagArray.length === 0 ? (c(),
    p("div", es, m(e.$t("web_3_label_empty")), 1)) : f("", !0), (c(!0),
    p(W, null, H(e.tagArray, r => {
        var h;
        return c(),
        p("div", {
            class: "current_tag",
            key: r,
            onClick: u => e.useTag(r)
        }, m(((h = e.tagMap[r]) == null ? void 0 : h.title) || ""), 9, ts)
    }
    ), 128))])]), e.whenExpand && e.showMore ? (c(),
    p("div", is, [a("div", ss, [(c(!0),
    p(W, null, H(e.docTagArray, r => (c(),
    p("div", {
        class: "my_tag",
        key: r
    }, [a("div", as, m(e.tagMap[r].title), 1), a("div", {
        class: "tag_delete",
        onClick: h => e.abandonTag(r)
    }, null, 8, os)]))), 128))]), a("div", ns, [a("div", {
        class: "btn",
        onClick: t[4] || (t[4] = (...r) => e.expandTag && e.expandTag(...r))
    }, m(e.$t("web_3_pickup")), 1), a("div", {
        class: "icon",
        onClick: t[5] || (t[5] = (...r) => e.expandTag && e.expandTag(...r))
    })])])) : f("", !0)]), a("div", ls, [a("div", {
        class: "tag_manager",
        onClick: t[6] || (t[6] = (...r) => e.toTagManager && e.toTagManager(...r))
    }, [rs, a("span", null, m(e.$t("web_3_label_manage")), 1)]), a("div", {
        class: "btn_green",
        onClick: t[7] || (t[7] = (...r) => e.confirm && e.confirm(...r))
    }, [a("span", null, m(e.$t("web_3_confirm")), 1)]), a("div", {
        class: "btn_gray",
        onClick: t[8] || (t[8] = (...r) => e.close && e.close(...r))
    }, [a("span", null, m(e.$t("web_3_cancel")), 1)])])]), k(n, {
        show: e.showTagDialog,
        onToast: e.showToast,
        onClose: e.closeTagDialog
    }, null, 8, ["show", "onToast", "onClose"])], 512)), [[C, e.show]])
}
const Yo = Q(Mi, [["render", ds], ["__scopeId", "data-v-93431118"]])
  , cs = Y({
    props: {
        selectedImage: {
            type: Object,
            required: !0
        },
        showBorder: {
            type: Boolean,
            default: () => !1
        },
        imageUrl: {
            type: String,
            default: () => ""
        },
        enhancedUrl: {
            type: String,
            default: () => ""
        },
        dataStr: {
            default: () => "",
            type: String
        }
    },
    watch: {
        enhancedUrl() {
            console.log("enhancedUrl改变导致watch触发"),
            this.init()
        },
        showBorder() {
            console.log("showBorder改变导致watch触发"),
            this.init()
        },
        dataStr() {
            console.log("dataStr改变导致watch触发"),
            this.parseImageData(),
            this.init()
        },
        selectedImage: {
            deep: !0,
            handler(e, t) {
                console.log("selectedImage改变导致watch触发"),
                e.rotateDegree !== t.rotateDegree && e.url === t.url && (this.enableTransition = !0,
                e.rotateDegree - t.rotateDegree === 90 || e.rotateDegree - t.rotateDegree === -270 ? this.totalRotateDegree += 90 : (e.rotateDegree - t.rotateDegree === -90 || e.rotateDegree - t.rotateDegree === 270) && (this.totalRotateDegree -= 90),
                this.init())
            }
        }
    },
    mounted() {
        this.parseImageData(),
        this.init()
    },
    data() {
        return {
            totalRotateDegree: 0,
            enableTransition: !1,
            showTools: !0,
            maxHeight: 552,
            maxWidth: 864,
            scaleRatio: 1,
            imageData: {},
            rectPoints: [],
            selectedLineIndex: -1,
            selectedVertexIndex: -1,
            SVGWrapper: {
                width: 0,
                height: 0
            }
        }
    },
    computed: {
        rectMiddlePoints() {
            return this.rectPoints.map( (e, t) => {
                const {x: i, y: s} = e
                  , o = t + 1 === this.rectPoints.length ? 0 : t + 1
                  , l = this.rectPoints[o]
                  , n = {
                    x: (i + l.x) / 2,
                    y: (s + l.y) / 2
                }
                  , r = {
                    x: t % 2 === 0 ? n.x - 2 * this.rectWidth : n.x - this.rectHeight / 2,
                    y: t % 2 === 0 ? n.y - this.rectWidth / 2 : n.y - this.rectWidth / 2
                }
                  , h = l.x - i
                  , u = l.y - s
                  , w = Math.atan2(u, h) * (180 / Math.PI);
                return {
                    ...r,
                    transform: "rotate(".concat(w, " ").concat(n.x, " ").concat(n.y, ")"),
                    width: this.rectHeight,
                    height: this.rectWidth
                }
            }
            )
        },
        centerRadius() {
            return 5 / this.scaleRatio
        },
        lineWidth() {
            return 2 / this.scaleRatio
        },
        cornerRadius() {
            return 4 / this.scaleRatio
        },
        rectWidth() {
            return 6 / this.scaleRatio
        },
        rectHeight() {
            return 28 / this.scaleRatio
        },
        svgPadding() {
            return 20 / this.scaleRatio
        },
        svgTranslate() {
            return "translate(".concat(this.svgPadding, ", ").concat(this.svgPadding, ")")
        }
    },
    methods: {
        init() {
            this.drawImage()
        },
        parseImageData() {
            const {dataStr: e} = this
              , t = e.split(",").map(Number);
            this.imageData = {
                origWidth: t[0],
                origHeight: t[1],
                modWidth: t[2],
                modHeight: t[3]
            },
            this.rectPoints = [{
                x: t[4],
                y: t[5]
            }, {
                x: t[6],
                y: t[7]
            }, {
                x: t[8],
                y: t[9]
            }, {
                x: t[10],
                y: t[11]
            }],
            this.totalRotateDegree = this.selectedImage.rotateDegree
        },
        drawImage() {
            const e = new Image;
            e.src = this.showBorder ? this.imageUrl : this.enhancedUrl,
            e.onload = () => {
                const [t,i] = [e.width, e.height];
                this.SVGWrapper = {
                    width: t,
                    height: i
                },
                this.selectedImage.rotateDegree === 90 || this.selectedImage.rotateDegree === 270 ? this.showBorder ? this.scaleRatio = this.calculateScaleRatio(i, t) : this.scaleRatio = this.calculateScaleRatio(t, i) : this.showBorder ? this.scaleRatio = this.calculateScaleRatio(t, i) : this.scaleRatio = this.calculateScaleRatio(t, i)
            }
        },
        calculateScaleRatio(e, t) {
            const i = e > this.maxWidth
              , s = t > this.maxHeight;
            return i || s ? Math.min(this.maxHeight / t, this.maxWidth / e) : 1
        },
        collectDataStr() {
            const {origWidth: e, origHeight: t, modWidth: i, modHeight: s} = this.imageData;
            return "".concat(e, ",").concat(t, ",").concat(i, ",").concat(s, ",").concat(this.rectPoints.map(o => "".concat(Math.floor(o.x), ",").concat(Math.floor(o.y))).join(","))
        },
        onMouseDown(e, t) {
            this.selectedVertexIndex = t === "point" ? e : -1,
            this.selectedLineIndex = t === "line" ? e : -1
        },
        onMouseUp() {
            this.showTools = !0,
            this.selectedLineIndex = -1,
            this.selectedVertexIndex = -1;
            const e = this.collectDataStr();
            this.$emit("end", e)
        },
        onMouseMove(e) {
            if (!this.showBorder || this.selectedVertexIndex === -1 && this.selectedLineIndex === -1)
                return;
            const {offsetX: t, offsetY: i} = e
              , s = this.imageData.origWidth
              , o = this.imageData.origHeight;
            if (this.selectedVertexIndex > -1) {
                this.showTools = !1;
                const l = this.rectPoints[this.selectedVertexIndex].x
                  , n = this.rectPoints[this.selectedVertexIndex].y
                  , r = t - l
                  , h = i - n;
                this.rectPoints[this.selectedVertexIndex].x = this.handleCollision(l, r, s, 0),
                this.rectPoints[this.selectedVertexIndex].y = this.handleCollision(n, h, o, 0)
            } else if (this.selectedLineIndex > -1) {
                this.showTools = !1;
                const l = this.selectedLineIndex % 4
                  , n = (this.selectedLineIndex + 1) % 4
                  , r = {
                    x: (this.rectPoints[l].x + this.rectPoints[n].x) / 2,
                    y: (this.rectPoints[l].y + this.rectPoints[n].y) / 2
                }
                  , h = t - r.x
                  , u = i - r.y;
                this.rectPoints[l].x = this.handleCollision(this.rectPoints[l].x, h, s, 0),
                this.rectPoints[n].x = this.handleCollision(this.rectPoints[n].x, h, s, 0),
                this.rectPoints[l].y = this.handleCollision(this.rectPoints[l].y, u, o, 0),
                this.rectPoints[n].y = this.handleCollision(this.rectPoints[n].y, u, o, 0)
            }
        },
        handleCollision(e, t, i, s=0) {
            const o = e - this.svgPadding
              , l = i;
            return o + t + s >= l ? l - s : o + t - s <= 0 ? s : o + t
        }
    }
})
  , hs = {
    class: "image-canvas-container",
    style: {
        display: "flex",
        "justify-self": "center",
        "align-items": "center"
    }
}
  , ms = ["width", "height"]
  , ps = ["transform", "href", "width", "height"]
  , us = ["transform", "points", "stroke-width"]
  , gs = ["transform"]
  , fs = ["x", "y", "transform", "width", "stroke-width", "height", "rx", "ry", "onPointerdown"]
  , vs = ["cx", "cy", "r", "stroke-width", "onPointerdown"];
function bs(e, t, i, s, o, l) {
    return c(),
    p("div", hs, [(c(),
    p("svg", {
        id: "imageSvg",
        ref: "svg",
        style: F({
            transform: "scale(".concat(e.scaleRatio, ") rotate(").concat(e.showBorder ? e.totalRotateDegree : 0, "deg)"),
            transition: "".concat(e.enableTransition ? "all 0.2s" : "none")
        }),
        width: e.SVGWrapper.width + e.svgPadding * 2,
        height: e.SVGWrapper.height + e.svgPadding * 2,
        onTransitionend: t[0] || (t[0] = n => e.enableTransition = !1),
        onPointermove: t[1] || (t[1] = (...n) => e.onMouseMove && e.onMouseMove(...n)),
        onPointerup: t[2] || (t[2] = (...n) => e.onMouseUp && e.onMouseUp(...n)),
        onPointerleave: t[3] || (t[3] = (...n) => e.onMouseUp && e.onMouseUp(...n))
    }, [a("image", {
        transform: e.svgTranslate,
        href: e.showBorder ? e.imageUrl : e.enhancedUrl,
        x: "0",
        y: "0",
        width: e.SVGWrapper.width,
        height: e.SVGWrapper.height
    }, null, 8, ps), _(a("polygon", {
        transform: e.svgTranslate,
        points: e.rectPoints.map(n => "".concat(n.x, ",").concat(n.y)).join(" "),
        fill: "transparent",
        stroke: "#19BCAA",
        "stroke-width": e.lineWidth
    }, null, 8, us), [[C, e.showBorder]]), (c(!0),
    p(W, null, H(e.rectPoints, (n, r) => _((c(),
    p("g", {
        transform: e.svgTranslate,
        key: r
    }, [a("rect", {
        style: F(r === 0 || r === 2 ? {
            cursor: "ns-resize"
        } : {
            cursor: "ew-resize"
        }),
        x: e.rectMiddlePoints[r].x,
        y: e.rectMiddlePoints[r].y,
        transform: e.rectMiddlePoints[r].transform,
        width: e.rectMiddlePoints[r].width,
        "stroke-width": e.lineWidth,
        height: e.rectMiddlePoints[r].height,
        rx: e.cornerRadius,
        ry: e.cornerRadius,
        fill: "#ffffff",
        stroke: "#19BCAA",
        onPointerdown: h => e.onMouseDown(r, "line")
    }, null, 44, fs), a("circle", {
        cx: n.x,
        cy: n.y,
        r: e.centerRadius,
        fill: "#ffffff",
        stroke: "#19BCAA",
        "stroke-width": e.lineWidth,
        onPointerdown: h => e.onMouseDown(r, "point")
    }, null, 40, vs)], 8, gs)), [[C, e.showBorder && e.showTools]])), 128))], 44, ms))])
}
const ws = Q(cs, [["render", bs], ["__scopeId", "data-v-74badae7"]])
  , _s = Y({
    name: "UploadSingleFile",
    props: {
        multiple: {
            type: Boolean,
            default: () => !0
        }
    },
    computed: {
        imgType() {
            return Je.uploadImgType
        }
    },
    methods: {
        uploadFile() {
            const t = this.$refs.selectPicFile.files;
            this.$emit("files", t)
        }
    }
})
  , ys = {
    class: "upload-single-file"
}
  , $s = ["multiple", "accept"];
function Cs(e, t, i, s, o, l) {
    return c(),
    p("div", ys, [a("input", {
        class: "btn_upload",
        type: "file",
        onChange: t[0] || (t[0] = n => e.uploadFile()),
        ref: "selectPicFile",
        multiple: !e.multiple,
        accept: e.imgType
    }, null, 40, $s), B(" " + m(e.$t("cs_645_webcamera_11")), 1)])
}
const Ts = Q(_s, [["render", Cs]]);
/*!
 * Compressor.js v1.2.1
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-02-28T14:09:41.732Z
 */
function He(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        t && (s = s.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })),
        i.push.apply(i, s)
    }
    return i
}
function ae(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t] != null ? arguments[t] : {};
        t % 2 ? He(Object(i), !0).forEach(function(s) {
            Ps(e, s, i[s])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : He(Object(i)).forEach(function(s) {
            Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(i, s))
        })
    }
    return e
}
function ks(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function ze(e, t) {
    for (var i = 0; i < t.length; i++) {
        var s = t[i];
        s.enumerable = s.enumerable || !1,
        s.configurable = !0,
        "value"in s && (s.writable = !0),
        Object.defineProperty(e, xe(s.key), s)
    }
}
function Ds(e, t, i) {
    return t && ze(e.prototype, t),
    i && ze(e, i),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function Ps(e, t, i) {
    return t = xe(t),
    t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i,
    e
}
function ne() {
    return ne = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var s in i)
                Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
    }
    ,
    ne.apply(this, arguments)
}
function Ls(e, t) {
    if (typeof e != "object" || e === null)
        return e;
    var i = e[Symbol.toPrimitive];
    if (i !== void 0) {
        var s = i.call(e, t || "default");
        if (typeof s != "object")
            return s;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function xe(e) {
    var t = Ls(e, "string");
    return typeof t == "symbol" ? t : String(t)
}
var et = {
    exports: {}
};
(function(e) {
    typeof window > "u" || function(t) {
        var i = t.HTMLCanvasElement && t.HTMLCanvasElement.prototype
          , s = t.Blob && function() {
            try {
                return !!new Blob
            } catch (h) {
                return !1
            }
        }()
          , o = s && t.Uint8Array && function() {
            try {
                return new Blob([new Uint8Array(100)]).size === 100
            } catch (h) {
                return !1
            }
        }()
          , l = t.BlobBuilder || t.WebKitBlobBuilder || t.MozBlobBuilder || t.MSBlobBuilder
          , n = /^data:((.*?)(;charset=.*?)?)(;base64)?,/
          , r = (s || l) && t.atob && t.ArrayBuffer && t.Uint8Array && function(h) {
            var u, w, y, S, $, g, d, b, R;
            if (u = h.match(n),
            !u)
                throw new Error("invalid data URI");
            for (w = u[2] ? u[1] : "text/plain" + (u[3] || ";charset=US-ASCII"),
            y = !!u[4],
            S = h.slice(u[0].length),
            y ? $ = atob(S) : $ = decodeURIComponent(S),
            g = new ArrayBuffer($.length),
            d = new Uint8Array(g),
            b = 0; b < $.length; b += 1)
                d[b] = $.charCodeAt(b);
            return s ? new Blob([o ? d : g],{
                type: w
            }) : (R = new l,
            R.append(g),
            R.getBlob(w))
        }
        ;
        t.HTMLCanvasElement && !i.toBlob && (i.mozGetAsFile ? i.toBlob = function(h, u, w) {
            var y = this;
            setTimeout(function() {
                w && i.toDataURL && r ? h(r(y.toDataURL(u, w))) : h(y.mozGetAsFile("blob", u))
            })
        }
        : i.toDataURL && r && (i.msToBlob ? i.toBlob = function(h, u, w) {
            var y = this;
            setTimeout(function() {
                (u && u !== "image/png" || w) && i.toDataURL && r ? h(r(y.toDataURL(u, w))) : h(y.msToBlob(u))
            })
        }
        : i.toBlob = function(h, u, w) {
            var y = this;
            setTimeout(function() {
                h(r(y.toDataURL(u, w)))
            })
        }
        )),
        e.exports ? e.exports = r : t.dataURLtoBlob = r
    }(window)
}
)(et);
var Ge = et.exports
  , Is = function(t) {
    return typeof Blob > "u" ? !1 : t instanceof Blob || Object.prototype.toString.call(t) === "[object Blob]"
}
  , Ke = {
    strict: !0,
    checkOrientation: !0,
    retainExif: !1,
    maxWidth: 1 / 0,
    maxHeight: 1 / 0,
    minWidth: 0,
    minHeight: 0,
    width: void 0,
    height: void 0,
    resize: "none",
    quality: .8,
    mimeType: "auto",
    convertTypes: ["image/png"],
    convertSize: 5e6,
    beforeDraw: null,
    drew: null,
    success: null,
    error: null
}
  , As = typeof window < "u" && typeof window.document < "u"
  , V = As ? window : {}
  , le = function(t) {
    return t > 0 && t < 1 / 0
}
  , Ss = Array.prototype.slice;
function _e(e) {
    return Array.from ? Array.from(e) : Ss.call(e)
}
var Es = /^image\/.+$/;
function we(e) {
    return Es.test(e)
}
function Ms(e) {
    var t = we(e) ? e.substr(6) : "";
    return t === "jpeg" && (t = "jpg"),
    ".".concat(t)
}
var tt = String.fromCharCode;
function Us(e, t, i) {
    var s = "", o;
    for (i += t,
    o = t; o < i; o += 1)
        s += tt(e.getUint8(o));
    return s
}
var Rs = V.btoa;
function Ye(e, t) {
    for (var i = [], s = 8192, o = new Uint8Array(e); o.length > 0; )
        i.push(tt.apply(null, _e(o.subarray(0, s)))),
        o = o.subarray(s);
    return "data:".concat(t, ";base64,").concat(Rs(i.join("")))
}
function Fs(e) {
    var t = new DataView(e), i;
    try {
        var s, o, l;
        if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
            for (var n = t.byteLength, r = 2; r + 1 < n; ) {
                if (t.getUint8(r) === 255 && t.getUint8(r + 1) === 225) {
                    o = r;
                    break
                }
                r += 1
            }
        if (o) {
            var h = o + 4
              , u = o + 10;
            if (Us(t, h, 4) === "Exif") {
                var w = t.getUint16(u);
                if (s = w === 18761,
                (s || w === 19789) && t.getUint16(u + 2, s) === 42) {
                    var y = t.getUint32(u + 4, s);
                    y >= 8 && (l = u + y)
                }
            }
        }
        if (l) {
            var S = t.getUint16(l, s), $, g;
            for (g = 0; g < S; g += 1)
                if ($ = l + g * 12 + 2,
                t.getUint16($, s) === 274) {
                    $ += 8,
                    i = t.getUint16($, s),
                    t.setUint16($, 1, s);
                    break
                }
        }
    } catch (d) {
        i = 1
    }
    return i
}
function Bs(e) {
    var t = 0
      , i = 1
      , s = 1;
    switch (e) {
    case 2:
        i = -1;
        break;
    case 3:
        t = -180;
        break;
    case 4:
        s = -1;
        break;
    case 5:
        t = 90,
        s = -1;
        break;
    case 6:
        t = 90;
        break;
    case 7:
        t = 90,
        i = -1;
        break;
    case 8:
        t = -90;
        break
    }
    return {
        rotate: t,
        scaleX: i,
        scaleY: s
    }
}
var Vs = /\.\d*(?:0|9){12}\d*$/;
function Qe(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
    return Vs.test(e) ? Math.round(e * t) / t : e
}
function te(e) {
    var t = e.aspectRatio
      , i = e.height
      , s = e.width
      , o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none"
      , l = le(s)
      , n = le(i);
    if (l && n) {
        var r = i * t;
        (o === "contain" || o === "none") && r > s || o === "cover" && r < s ? i = s / t : s = i * t
    } else
        l ? i = s / t : n && (s = i * t);
    return {
        width: s,
        height: i
    }
}
function Ns(e) {
    for (var t = _e(new Uint8Array(e)), i = t.length, s = [], o = 0; o + 3 < i; ) {
        var l = t[o]
          , n = t[o + 1];
        if (l === 255 && n === 218)
            break;
        if (l === 255 && n === 216)
            o += 2;
        else {
            var r = t[o + 2] * 256 + t[o + 3]
              , h = o + r + 2
              , u = t.slice(o, h);
            s.push(u),
            o = h
        }
    }
    return s.reduce(function(w, y) {
        return y[0] === 255 && y[1] === 225 ? w.concat(y) : w
    }, [])
}
function Os(e, t) {
    var i = _e(new Uint8Array(e));
    if (i[2] !== 255 || i[3] !== 224)
        return e;
    var s = i[4] * 256 + i[5]
      , o = [255, 216].concat(t, i.slice(4 + s));
    return new Uint8Array(o)
}
var js = V.ArrayBuffer
  , fe = V.FileReader
  , N = V.URL || V.webkitURL
  , Ws = /\.\w+$/
  , Hs = V.Compressor
  , zs = function() {
    function e(t, i) {
        ks(this, e),
        this.file = t,
        this.exif = [],
        this.image = new Image,
        this.options = ae(ae({}, Ke), i),
        this.aborted = !1,
        this.result = null,
        this.init()
    }
    return Ds(e, [{
        key: "init",
        value: function() {
            var i = this
              , s = this.file
              , o = this.options;
            if (!Is(s)) {
                this.fail(new Error("The first argument must be a File or Blob object."));
                return
            }
            var l = s.type;
            if (!we(l)) {
                this.fail(new Error("The first argument must be an image File or Blob object."));
                return
            }
            if (!N || !fe) {
                this.fail(new Error("The current browser does not support image compression."));
                return
            }
            js || (o.checkOrientation = !1,
            o.retainExif = !1);
            var n = l === "image/jpeg"
              , r = n && o.checkOrientation
              , h = n && o.retainExif;
            if (N && !r && !h)
                this.load({
                    url: N.createObjectURL(s)
                });
            else {
                var u = new fe;
                this.reader = u,
                u.onload = function(w) {
                    var y = w.target
                      , S = y.result
                      , $ = {}
                      , g = 1;
                    r && (g = Fs(S),
                    g > 1 && ne($, Bs(g))),
                    h && (i.exif = Ns(S)),
                    r || h ? !N || g > 1 ? $.url = Ye(S, l) : $.url = N.createObjectURL(s) : $.url = S,
                    i.load($)
                }
                ,
                u.onabort = function() {
                    i.fail(new Error("Aborted to read the image with FileReader."))
                }
                ,
                u.onerror = function() {
                    i.fail(new Error("Failed to read the image with FileReader."))
                }
                ,
                u.onloadend = function() {
                    i.reader = null
                }
                ,
                r || h ? u.readAsArrayBuffer(s) : u.readAsDataURL(s)
            }
        }
    }, {
        key: "load",
        value: function(i) {
            var s = this
              , o = this.file
              , l = this.image;
            l.onload = function() {
                s.draw(ae(ae({}, i), {}, {
                    naturalWidth: l.naturalWidth,
                    naturalHeight: l.naturalHeight
                }))
            }
            ,
            l.onabort = function() {
                s.fail(new Error("Aborted to load the image."))
            }
            ,
            l.onerror = function() {
                s.fail(new Error("Failed to load the image."))
            }
            ,
            V.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(V.navigator.userAgent) && (l.crossOrigin = "anonymous"),
            l.alt = o.name,
            l.src = i.url
        }
    }, {
        key: "draw",
        value: function(i) {
            var s = this
              , o = i.naturalWidth
              , l = i.naturalHeight
              , n = i.rotate
              , r = n === void 0 ? 0 : n
              , h = i.scaleX
              , u = h === void 0 ? 1 : h
              , w = i.scaleY
              , y = w === void 0 ? 1 : w
              , S = this.file
              , $ = this.image
              , g = this.options
              , d = document.createElement("canvas")
              , b = d.getContext("2d")
              , R = Math.abs(r) % 180 === 90
              , he = (g.resize === "contain" || g.resize === "cover") && le(g.width) && le(g.height)
              , X = Math.max(g.maxWidth, 0) || 1 / 0
              , q = Math.max(g.maxHeight, 0) || 1 / 0
              , J = Math.max(g.minWidth, 0) || 0
              , Z = Math.max(g.minHeight, 0) || 0
              , G = o / l
              , L = g.width
              , I = g.height;
            if (R) {
                var ye = [q, X];
                X = ye[0],
                q = ye[1];
                var $e = [Z, J];
                J = $e[0],
                Z = $e[1];
                var Ce = [I, L];
                L = Ce[0],
                I = Ce[1]
            }
            he && (G = L / I);
            var Te = te({
                aspectRatio: G,
                width: X,
                height: q
            }, "contain");
            X = Te.width,
            q = Te.height;
            var ke = te({
                aspectRatio: G,
                width: J,
                height: Z
            }, "cover");
            if (J = ke.width,
            Z = ke.height,
            he) {
                var De = te({
                    aspectRatio: G,
                    width: L,
                    height: I
                }, g.resize);
                L = De.width,
                I = De.height
            } else {
                var Pe = te({
                    aspectRatio: G,
                    width: L,
                    height: I
                })
                  , Le = Pe.width;
                L = Le === void 0 ? o : Le;
                var Ie = Pe.height;
                I = Ie === void 0 ? l : Ie
            }
            L = Math.floor(Qe(Math.min(Math.max(L, J), X))),
            I = Math.floor(Qe(Math.min(Math.max(I, Z), q)));
            var it = -L / 2
              , st = -I / 2
              , at = L
              , ot = I
              , me = [];
            if (he) {
                var Ae = 0
                  , Se = 0
                  , pe = o
                  , ue = l
                  , Ee = te({
                    aspectRatio: G,
                    width: o,
                    height: l
                }, {
                    contain: "cover",
                    cover: "contain"
                }[g.resize]);
                pe = Ee.width,
                ue = Ee.height,
                Ae = (o - pe) / 2,
                Se = (l - ue) / 2,
                me.push(Ae, Se, pe, ue)
            }
            if (me.push(it, st, at, ot),
            R) {
                var Me = [I, L];
                L = Me[0],
                I = Me[1]
            }
            d.width = L,
            d.height = I,
            we(g.mimeType) || (g.mimeType = S.type);
            var Ue = "transparent";
            S.size > g.convertSize && g.convertTypes.indexOf(g.mimeType) >= 0 && (g.mimeType = "image/jpeg");
            var Re = g.mimeType === "image/jpeg";
            if (Re && (Ue = "#fff"),
            b.fillStyle = Ue,
            b.fillRect(0, 0, L, I),
            g.beforeDraw && g.beforeDraw.call(this, b, d),
            !this.aborted && (b.save(),
            b.translate(L / 2, I / 2),
            b.rotate(r * Math.PI / 180),
            b.scale(u, y),
            b.drawImage.apply(b, [$].concat(me)),
            b.restore(),
            g.drew && g.drew.call(this, b, d),
            !this.aborted)) {
                var Fe = function(x) {
                    if (!s.aborted) {
                        var Be = function(ee) {
                            return s.done({
                                naturalWidth: o,
                                naturalHeight: l,
                                result: ee
                            })
                        };
                        if (x && Re && g.retainExif && s.exif && s.exif.length > 0) {
                            var Ve = function(ee) {
                                return Be(Ge(Ye(Os(ee, s.exif), g.mimeType)))
                            };
                            if (x.arrayBuffer)
                                x.arrayBuffer().then(Ve).catch(function() {
                                    s.fail(new Error("Failed to read the compressed image with Blob.arrayBuffer()."))
                                });
                            else {
                                var K = new fe;
                                s.reader = K,
                                K.onload = function(ge) {
                                    var ee = ge.target;
                                    Ve(ee.result)
                                }
                                ,
                                K.onabort = function() {
                                    s.fail(new Error("Aborted to read the compressed image with FileReader."))
                                }
                                ,
                                K.onerror = function() {
                                    s.fail(new Error("Failed to read the compressed image with FileReader."))
                                }
                                ,
                                K.onloadend = function() {
                                    s.reader = null
                                }
                                ,
                                K.readAsArrayBuffer(x)
                            }
                        } else
                            Be(x)
                    }
                };
                d.toBlob ? d.toBlob(Fe, g.mimeType, g.quality) : Fe(Ge(d.toDataURL(g.mimeType, g.quality)))
            }
        }
    }, {
        key: "done",
        value: function(i) {
            var s = i.naturalWidth
              , o = i.naturalHeight
              , l = i.result
              , n = this.file
              , r = this.image
              , h = this.options;
            if (N && r.src.indexOf("blob:") === 0 && N.revokeObjectURL(r.src),
            l)
                if (h.strict && !h.retainExif && l.size > n.size && h.mimeType === n.type && !(h.width > s || h.height > o || h.minWidth > s || h.minHeight > o || h.maxWidth < s || h.maxHeight < o))
                    l = n;
                else {
                    var u = new Date;
                    l.lastModified = u.getTime(),
                    l.lastModifiedDate = u,
                    l.name = n.name,
                    l.name && l.type !== n.type && (l.name = l.name.replace(Ws, Ms(l.type)))
                }
            else
                l = n;
            this.result = l,
            h.success && h.success.call(this, l)
        }
    }, {
        key: "fail",
        value: function(i) {
            var s = this.options;
            if (s.error)
                s.error.call(this, i);
            else
                throw i
        }
    }, {
        key: "abort",
        value: function() {
            this.aborted || (this.aborted = !0,
            this.reader ? this.reader.abort() : this.image.complete ? this.fail(new Error("The compression process has been aborted.")) : (this.image.onload = null,
            this.image.onabort()))
        }
    }], [{
        key: "noConflict",
        value: function() {
            return window.Compressor = Hs,
            e
        }
    }, {
        key: "setDefaults",
        value: function(i) {
            ne(Ke, i)
        }
    }]),
    e
}();
const Gs = new URL("https://static-cdn.camscanner.com/camscanner-toc/static/remove-shadow-COSYhzZh.png",import.meta.url).href
  , Ks = new URL("https://static-cdn.camscanner.com/camscanner-toc/static/origin-DQdM4hVa.png",import.meta.url).href
  , Ys = new URL("https://static-cdn.camscanner.com/camscanner-toc/static/enhance-I7isTS71.png",import.meta.url).href
  , Qs = new URL("https://static-cdn.camscanner.com/camscanner-toc/static/blacken-DhcP4Zm5.png",import.meta.url).href
  , Xs = new URL("https://static-cdn.camscanner.com/camscanner-toc/static/ink-1oGl3LZE.png",import.meta.url).href
  , qs = new URL("https://static-cdn.camscanner.com/camscanner-toc/static/brighten-DnmRhAsP.png",import.meta.url).href
  , Js = new URL("https://static-cdn.camscanner.com/camscanner-toc/static/super-filter-BXlyVH5V.png",import.meta.url).href
  , Zs = Y({
    components: {
        draggable: It,
        ImageCanvas: ws,
        UploadSingleFileView: Ts
    },
    props: {
        files: {
            type: Array,
            default: () => []
        },
        showShoot: {
            type: Boolean,
            default: !1
        }
    },
    data() {
        return {
            userCancelSaveDoc: !1,
            TAG: "CSEnhancePC",
            isCaptureActive: !1,
            showDeleteConfirm: !1,
            continueUploadFileSingle: !1,
            animationStyle: {},
            captureLoading: !1,
            currentBlob: "",
            callable: !0,
            showAddPicBtnPopover: !1,
            showQuickTip: !0,
            showCreateModal: !1,
            applyFilterToAllPic: !1,
            showConfirmModal: !1,
            hoverIndex: -1,
            needToDelIndex: -1,
            selectedPicIndex: 0,
            mode: "SHOOT",
            deviceId: "",
            rotateDegree: 0,
            deviceList: [],
            stream: void 0,
            imageList: [],
            wheel_flag: !1,
            wheelDebounceTimeout: null,
            originSetting: {},
            videoResolution: {},
            defaultDocumentName: "",
            tmpDocName: "",
            editNameVisible: !1,
            video: {},
            docId: "",
            uploadProcess: 0,
            uploadProcessImageIndex: null,
            filterConfig: [{
                label: this.$t("web_3_image_filter_original"),
                mode: -1,
                pic: Ks,
                logLabel: "original"
            }, {
                label: this.$t("web_3_image_filter_enhance"),
                mode: 2,
                pic: Ys,
                logLabel: "magic"
            }, {
                label: this.$t("cs_web_658_edit43"),
                mode: 6,
                pic: Js,
                logLabel: "super_filter"
            }, {
                label: this.$t("web_3_image_filter_brighten"),
                mode: 1,
                pic: qs,
                logLabel: "brighten"
            }, {
                label: this.$t("web_3_image_filter_shadow"),
                mode: 5,
                pic: Gs,
                logLabel: "remove_shadow"
            }, {
                label: this.$t("web_3_image_filter_bw"),
                mode: 3,
                pic: Qs,
                logLabel: "black_white"
            }, {
                label: this.$t("web_3_image_filter_economy"),
                mode: 4,
                pic: Xs,
                logLabel: "ink"
            }],
            viewedPicIndexArr: [0],
            clipMode: "ALL"
        }
    },
    beforeUnmount() {
        this.pauseVideo(),
        document.removeEventListener("keydown", this.handleKeyDown),
        document.removeEventListener("keyup", this.handleKeyUp),
        document.removeEventListener("contextmenu", this.preventContext),
        document.removeEventListener("selectstart", this.preventSelect)
    },
    mounted() {
        if (this.files.length)
            this.mode = "CLIP",
            this.defaultDocumentName = this.files[0].name.replace(/\.[^/.]+$/, ""),
            this.handleFileUpload(this.files);
        else {
            this.getAllDevices();
            const e = this.$i18n.locale === "zh-cn" ? "扫描全能王" : "Camscanner";
            this.defaultDocumentName = e + At().format("YYYY-MM-DD HH:mm:ss")
        }
        this.handleShowTip(),
        document.addEventListener("contextmenu", this.preventContext),
        document.addEventListener("selectstart", this.preventSelect)
    },
    computed: {
        showBorder() {
            return this.mode === "CLIP"
        },
        isValidCamera() {
            return this.deviceList.length > 0
        },
        videoStyleInverse() {
            const e = this.rotateDegree % 360;
            return Math.abs(e) === 90 || Math.abs(e) === 270 ? {
                width: this.videoStyle.height,
                height: this.videoStyle.width
            } : this.videoStyle
        },
        originVideoStyle() {
            if (!this.videoResolution.width || !this.videoResolution.height)
                return {
                    width: 0,
                    height: 0
                };
            const e = this.videoResolution.height;
            return {
                width: this.videoResolution.width,
                height: e
            }
        },
        videoStyle() {
            if (!this.videoResolution.width || !this.videoResolution.height)
                return {
                    width: "0px",
                    height: "0px"
                };
            const e = 578;
            return {
                width: this.videoResolution.width / this.videoResolution.height * e + "px",
                height: e + "px"
            }
        },
        videoRotateStyle() {
            return {
                transform: "rotate(".concat(this.rotateDegree, "deg)")
            }
        }
    },
    watch: {
        selectedPicIndex(e) {
            const t = this.$refs["draggableImgRef".concat(e)];
            t && t.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center"
            })
        },
        applyFilterToAllPic() {
            if (this.applyFilterToAllPic) {
                const {imageList: e, selectedPicIndex: t, filterConfig: i} = this
                  , s = e[t].mode
                  , o = i.find(l => l.mode === s);
                o && this.handleFilterSelect(o)
            }
        },
        rotateDegree() {
            localStorage.setItem("rotateDegree", this.rotateDegree + "")
        },
        deviceId() {
            localStorage.setItem("deviceId", this.deviceId),
            this.handleDeviceChange()
        }
    },
    methods: {
        preventContext(e) {
            e.preventDefault()
        },
        preventSelect(e) {
            e.preventDefault()
        },
        showFilterRunningOut() {
            A.emit("toast", {
                msg: this.$t("cs_654_web_drtp04")
            })
        },
        handleCancelUpload() {
            console.log("close"),
            this.showCreateModal = !1,
            this.userCancelSaveDoc = !0
        },
        handleAddLocalPic() {
            this.continueUploadFileSingle = !1,
            this.showAddPicBtnPopover = !1
        },
        handleShootReplace() {
            E("CSEnhancePC", "replace"),
            this.files && this.deviceList.length === 0 ? this.getAllDevices() : this.handleDeviceChange(),
            this.mode = "REPLACE"
        },
        handleUploadDirectly() {
            this.imageList = this.imageList.map(e => (e.position = e.border_position,
            e.rotateDegree = 0,
            e.mode = -1,
            e)),
            this.handleCreateDoc()
        },
        handleBackToClip() {
            this.mode = "CLIP",
            this.viewedPicIndexArr = [this.selectedPicIndex]
        },
        handleViewPic(e) {
            !this.viewedPicIndexArr.includes(e) && this.mode === "CLIP" && this.viewedPicIndexArr.push(e)
        },
        handleEditDocName() {
            E("CSEnhancePC", "rename"),
            this.tmpDocName = this.defaultDocumentName,
            this.editNameVisible = !0,
            this.$refs.elInput.focus()
        },
        handleCloseCreateSuccess() {
            this.showCreateModal = !1,
            this.$emit("handle-close")
        },
        handleContinueUpload(e) {
            E(this.TAG, "continue"),
            this.continueUploadFileSingle = !1;
            const t = this.imageList.length;
            this.selectedPicIndex = t,
            this.handleViewPic(t),
            this.handleFileUpload(e)
        },
        async handleContinueUploadSingle(e) {
            this.continueUploadFileSingle = !0;
            const t = e[0];
            try {
                const i = await this.fileToBlob(t)
                  , s = await this.handleImageAutoCut(i);
                this.imageList[this.selectedPicIndex] = s
            } catch (i) {
                throw console.log(i),
                i
            }
        },
        handleKeyUp(e) {
            e.keyCode === 32 && (this.mode === "SHOOT" || this.mode === "REPLACE") && (this.isCaptureActive = !1)
        },
        handleKeyDown(e) {
            e.keyCode === 32 && (this.mode === "SHOOT" || this.mode === "REPLACE") && (this.callable && (this.isCaptureActive = !0,
            this.handleShootCamera()),
            this.mode === "SHOOT" ? (this.callable = !1,
            setTimeout( () => {
                this.callable = !0
            }
            , 300)) : this.callable = !1),
            (e.keyCode === 39 || e.keyCode === 40) && (this.mode === "EDIT" || this.mode === "CLIP") && (e.preventDefault(),
            this.handleSelectPrevious()),
            (e.keyCode === 37 || e.keyCode === 38) && (this.mode === "EDIT" || this.mode === "CLIP") && (e.preventDefault(),
            this.handleSelectNext())
        },
        handleCloseTip() {
            localStorage.setItem("showQuickTip", "showQuickTip"),
            this.showQuickTip = !1
        },
        handleShowTip() {
            const e = !localStorage.getItem("showQuickTip");
            this.showQuickTip = e,
            document.addEventListener("keydown", this.handleKeyDown),
            document.addEventListener("keyup", this.handleKeyUp);
            const t = localStorage.getItem("rotateDegree");
            this.rotateDegree = Number(t) || 0,
            this.docId = ""
        },
        handleToViewDoc() {
            const {docId: e} = this;
            this.showCreateModal = !1,
            this.$router.currentRoute.value.path === "/file/detail" && this.$router.currentRoute.value.query.id !== e ? this.$router.replace({
                query: {
                    id: e
                }
            }).then( () => {
                this.$router.go(0)
            }
            ) : this.$router.push({
                path: "/file/detail",
                query: {
                    id: e
                }
            })
        },
        handleRotateImg(e) {
            E("CSEnhancePC", "turn"),
            this.imageList = this.imageList.map( (t, i) => {
                if (i === this.selectedPicIndex) {
                    const s = (t.rotateDegree + e + 360) % 360;
                    return {
                        ...t,
                        rotateDegree: s
                    }
                }
                return t
            }
            )
        },
        handleFilterSelect(e) {
            E(this.TAG, "filter", e.logLabel);
            const {selectedPicIndex: t, applyFilterToAllPic: i} = this;
            i ? this.imageList.forEach( (s, o) => {
                this.imageList[o].loading = !0,
                s.mode = e.mode,
                this.handleEnhance(o).then(l => {
                    setTimeout( () => {
                        this.imageList[o].loading = !1,
                        this.mode = "EDIT"
                    }
                    , 50),
                    l.size !== 33 ? this.imageList[o].enhanceUrl = URL.createObjectURL(l) : (this.showFilterRunningOut(),
                    this.imageList[o].enhanceUrl = this.imageList[o].url)
                }
                )
            }
            ) : (this.imageList[t].mode = e.mode,
            this.imageList[t].loading = !0,
            this.handleEnhance(t).then(s => {
                s.size === 33 ? (this.showFilterRunningOut(),
                this.imageList[t].enhanceUrl = this.imageList[t].url) : (this.imageList[t].enhanceUrl = URL.createObjectURL(s),
                setTimeout( () => {
                    this.imageList[t].loading = !1,
                    this.mode = "EDIT"
                }
                , 50))
            }
            ).finally( () => {
                this.imageList[t].loading = !1
            }
            )),
            localStorage.setItem("filter-mode", JSON.stringify(e))
        },
        selectImage(e) {
            this.selectedPicIndex = e,
            this.handleViewPic(this.selectedPicIndex)
        },
        handleSelectNext() {
            this.selectedPicIndex = this.selectedPicIndex === 0 ? this.imageList.length - 1 : this.selectedPicIndex - 1,
            this.handleViewPic(this.selectedPicIndex)
        },
        handleSelectPrevious() {
            this.selectedPicIndex = this.selectedPicIndex === this.imageList.length - 1 ? 0 : this.selectedPicIndex + 1,
            this.handleViewPic(this.selectedPicIndex)
        },
        handleConfirmDelete() {
            const e = this.needToDelIndex;
            this.imageList.splice(e, 1),
            e <= this.selectedPicIndex && (this.selectedPicIndex = this.selectedPicIndex > 0 ? this.selectedPicIndex - 1 : 0),
            this.showDeleteConfirm = !1
        },
        handleDelete(e) {
            this.imageList.length !== 1 && (this.needToDelIndex = e,
            this.showDeleteConfirm = !0)
        },
        handleConfirmExit() {
            localStorage.setItem("showQuickTip", "showQuickTip"),
            this.$emit("handle-close")
        },
        closeDialog() {
            E("CSScanPC", "close"),
            this.docId ? this.$emit("handle-close") : this.showConfirmModal = !0
        },
        handleSelectCamera(e) {
            E("CSScanPC", "camera_select"),
            this.deviceId = e.deviceId
        },
        handleRotate(e) {
            this.rotateDegree = (this.rotateDegree + e + 360) % 360
        },
        handleDeviceChange() {
            const {deviceId: e} = this
              , t = {
                audio: !1,
                video: {
                    deviceId: {
                        exact: e
                    },
                    width: {
                        ideal: 1920
                    },
                    height: {
                        ideal: 1080
                    }
                }
            };
            this.getMedia(t)
        },
        getAllDevices() {
            var e;
            (e = navigator.mediaDevices) != null && e.enumerateDevices && navigator.mediaDevices.enumerateDevices().then(t => {
                if (t.some(s => s.deviceId)) {
                    if (this.deviceList = t.filter(s => s.kind === "videoinput"),
                    this.deviceList.length) {
                        const s = localStorage.getItem("deviceId")
                          , o = this.deviceList.some(l => l.deviceId === s);
                        this.deviceId = s && o ? s : this.deviceList[0].deviceId
                    }
                    localStorage.setItem("deviceId", this.deviceId)
                } else
                    navigator.mediaDevices.getUserMedia({
                        audio: !1,
                        video: !0
                    }).then(s => {
                        s.getVideoTracks()[0].stop(),
                        this.getAllDevices()
                    }
                    ).catch(s => {
                        throw s.message.indexOf("Permission denied") > -1 ? A.emit("toast", {
                            msg: "权限之前已被拒绝, 请手动打开摄像头"
                        }) : A.emit("toast", {
                            msg: "未检测到摄像设备"
                        }),
                        this.$emit("handle-close"),
                        s
                    }
                    )
            }
            )
        },
        handlePositionChange(e) {
            this.imageList[this.selectedPicIndex].interaction_position = e
        },
        handleShootFinish() {
            E("CSScanPC", "next"),
            this.mode = "CLIP",
            this.pauseVideo()
        },
        async getMedia(e) {
            try {
                let t;
                "prototype"in e ? t = e : t = await navigator.mediaDevices.getUserMedia(e);
                const i = t.getVideoTracks()[0];
                i && (this.originSetting = i.getSettings(),
                this.videoResolution = i.getSettings());
                const s = document.getElementById("video")
                  , o = document.getElementById("offscreenVideo")
                  , l = document.getElementById("canvas")
                  , n = l.getContext("2d");
                l.width = this.originVideoStyle.width,
                l.height = this.originVideoStyle.height,
                "srcObject"in s && (s.srcObject = t,
                o.srcObject = t),
                s.onloadedmetadata = () => {
                    s.play()
                }
                ,
                s.addEventListener("play", () => {
                    const r = () => {
                        s.paused || s.ended || (n.save(),
                        n.drawImage(s, 0, 0, l.width, l.height),
                        n.restore(),
                        requestAnimationFrame(r))
                    }
                    ;
                    r()
                }
                ),
                this.stream = t,
                this.video = s
            } catch (t) {}
        },
        captureBlob() {
            const e = document.getElementById("canvas");
            return new Promise( (t, i) => {
                e.toBlob(s => {
                    s ? t(s) : i(new Error("Failed to capture canvas as Blob"))
                }
                , "image/jpeg", 1)
            }
            )
        },
        handleClipConfirm() {
            E("CSEnhancePC", "cut"),
            this.mode = "EDIT",
            this.imageList.forEach(e => {
                e.mode = this.getDefaultFilterMode()
            }
            ),
            this.handleViewPic(this.selectedPicIndex),
            this.viewedPicIndexArr = this.viewedPicIndexArr.filter(e => e < this.imageList.length),
            this.viewedPicIndexArr.forEach(e => {
                this.imageList[e].loading = !0,
                this.imageList[e].position = this.imageList[e].interaction_position,
                this.handleEnhance(e).then(t => {
                    t.size !== 33 ? this.imageList[e].enhanceUrl = URL.createObjectURL(t) : (this.showFilterRunningOut(),
                    this.imageList[e].enhanceUrl = this.imageList[e].url),
                    console.log(t),
                    this.imageList[e].loading = !1,
                    this.showConfirmModal = !1
                }
                ).catch(t => {
                    throw A.emit("toast", {
                        msg: "切边失败"
                    }),
                    t
                }
                )
            }
            )
        },
        handleEnterFilterMode() {
            this.handleClipConfirm()
        },
        handleClipStateSwitch() {
            this.handleClipPic(),
            this.clipMode === "ALL" ? this.clipMode = "AUTO" : this.clipMode = "ALL"
        },
        handleClipAllPic() {
            const {selectedPicIndex: e} = this
              , {border_position: t} = this.imageList[e];
            this.imageList[e].interaction_position = t,
            this.handleClipPic()
        },
        handleClipPic() {
            E("CSEnhancePC", "clip");
            const {selectedPicIndex: e} = this
              , {cut_position: t, border_position: i} = this.imageList[e];
            this.viewedPicIndexArr = [this.selectedPicIndex],
            this.imageList[e].interaction_position = this.clipMode === "ALL" ? i : t
        },
        handleEnhance(e) {
            const t = this.imageList[e]
              , i = {
                token: D().token,
                mode: t.mode || 1,
                file_name: "".concat(t.page_id, ".jpg"),
                jpg_md5: t.jpg_md5,
                upload_time: t.upload_time,
                rotate: "".concat(t.rotateDegree),
                border: t.position.split(",").slice(4).join(","),
                ttype: 0
            };
            return Rt(i)
        },
        handleSuccessModalClose() {
            this.showCreateModal = !1,
            this.closeDialog()
        },
        handleContinue() {
            this.showAddPicBtnPopover = !1,
            this.selectedPicIndex = this.imageList.length,
            this.handleViewPic(this.selectedPicIndex),
            this.mode = "SHOOT",
            this.files && this.deviceList.length === 0 ? this.getAllDevices() : this.handleDeviceChange()
        },
        saveAllPic() {
            this.uploadProcess = 0;
            const e = this.imageList.map( (t, i) => {
                const s = {
                    token: D().token,
                    mode: t.mode || 1,
                    rotate: "".concat(t.rotateDegree),
                    file_name: "".concat(t.page_id, ".jpg"),
                    jpg_md5: t.jpg_md5,
                    upload_time: t.upload_time,
                    border: t.position.split(",").slice(4).join(","),
                    ttype: 1
                };
                return We(s).then(o => o.ret === 0 ? (this.uploadProcess += 1,
                o) : (this.imageList[i].mode = 1,
                s.mode = 1,
                this.uploadProcess += 1,
                We(s).then(l => l)))
            }
            );
            return Promise.all(e).then(t => {
                this.imageList.forEach( (i, s) => {
                    t[s].ret === 0 && (i.jpg_md5 = t[s].data.jpg_md5,
                    i.upload_time = t[s].data.upload_time,
                    i.page_id = t[s].data.new_page_id,
                    i.position = t[s].data.result_pos)
                }
                )
            }
            ).catch(t => {
                throw A.emit("toast", {
                    msg: "保存失败"
                }),
                t
            }
            )
        },
        async handleCreateDoc() {
            E("CSCutPC", "complete"),
            this.showCreateModal = !0,
            await this.saveAllPic(),
            this.showConfirmModal = !1;
            const e = {
                token: D().token
            }
              , t = {
                title: this.defaultDocumentName,
                images: this.imageList.map(s => ({
                    page_id: s.page_id,
                    jpg_md5: s.jpg_md5,
                    upload_time: s.upload_time,
                    border: s.position,
                    ori_rotate: s.rotateDegree
                }))
            }
              , i = this.$route.query.path;
            if (typeof i == "string" && i) {
                const s = i.split(",");
                t.dir_id = s[s.length - 1]
            }
            if (this.userCancelSaveDoc) {
                this.userCancelSaveDoc = !1;
                return
            }
            Ft(e, t).then(s => {
                s.ret === 0 ? (this.docId = s.data.doc_id,
                setTimeout( () => {
                    this.handleToViewDoc()
                }
                , 200)) : (this.showCreateModal = !1,
                A.emit("toast", {
                    msg: s.err
                }))
            }
            )
        },
        async fileToBlob(e) {
            const t = await this.compressImage(e);
            return new Promise( (i, s) => {
                const o = new FileReader;
                o.onload = () => {
                    if (o.result) {
                        const l = new Blob([o.result],{
                            type: e.type
                        });
                        i(l)
                    } else
                        s(new Error("Unable to read the file."))
                }
                ,
                o.onerror = () => {
                    s(new Error("Unable to read the file."))
                }
                ,
                o.readAsArrayBuffer(t)
            }
            )
        },
        compressImage(e) {
            return new Promise(t => {
                new zs(e,{
                    quality: .75,
                    success(i) {
                        t(i)
                    },
                    error(i) {
                        throw t(e),
                        i
                    }
                })
            }
            )
        },
        getDefaultFilterMode() {
            const e = localStorage.getItem("filter-mode");
            let t = 1;
            return e && (t = JSON.parse(e).mode),
            t
        },
        async handleImageAutoCut(fileBlob, rotateDegree = 0) {
        return new Promise((resolve, reject) => {
            Bt(fileBlob, { token: D().token, card_pos: 1 })
                .then(async response => {
                    if (response.ret === 0) {
                        const imageUrl = URL.createObjectURL(fileBlob);
                        const imageItem = {
                            ...response.data,
                            url: imageUrl,
                            rotateDegree,
                            mode: -1,
                            enhanceUrl: imageUrl,
                            loading: false,
                            cut_position: '',
                            interaction_position: '',
                            border_position: ''
                        };
                        resolve(imageItem);
                    } else {
                        reject(response.data);
                    }
                })
                .catch(error => {
                    reject(error.message);
                });
        });
    },
    // Expose this method globally
    exposeHandleImageAutoCut() {
        window.handleImageAutoCut = this.handleImageAutoCut;
    },
        async handleShootCamera() {
            const {isValidCamera: e, imageList: t, mode: i, rotateDegree: s} = this;
            if (!e)
                return;
            if (t.length >= 50) {
                A.emit("toast", {
                    msg: "最多拍摄50张图片"
                });
                return
            }
            this.captureLoading = !0,
            this.handleCloseTip();
            const o = await this.captureBlob();
            try {
                const l = await this.handleImageAutoCut(o, s);
                i === "REPLACE" ? (this.imageList[this.selectedPicIndex] = l,
                this.handleShootFinish()) : this.imageList.push(l),
                this.captureLoading = !1
            } catch (l) {
                throw this.captureLoading = !1,
                A.emit("toast", {
                    msg: "处理异常, 请重新拍摄"
                }),
                l
            }
        },
        async handleFileUpload(e) {
            const t = this.imageList.length
              , i = Array.from(e)
              , s = i.map( () => ({
                jpg_md5: "",
                upload_time: 0,
                page_id: "NO_PAGE_ID",
                position: "",
                rotateDegree: 0,
                url: "",
                mode: -1,
                enhanceUrl: "",
                loading: !0,
                cut_position: "",
                interaction_position: "",
                border_position: ""
            }));
            this.imageList = this.imageList.concat(s),
            this.mode = "CLIP";
            for (let o = 0; o < i.length; o++) {
                const l = i[o]
                  , n = await this.fileToBlob(l);
                this.handleImageAutoCut(n).then(r => {
                    const h = t + o;
                    this.imageList[h] = r
                }
                )
            }
        },
        handleCancelModal() {
            this.showCreateModal = !1
        },
        pauseVideo() {
            const {stream: e} = this;
            if (e) {
                const t = e.getVideoTracks();
                this.video.pause(),
                this.video.srcObject = null,
                t.forEach(i => i.stop())
            }
        },
        confirmChangeDocName() {
            this.defaultDocumentName.trim() && (this.defaultDocumentName = this.defaultDocumentName.trim(),
            this.editNameVisible = !1)
        },
        cancelChangeDocumentName() {
            this.defaultDocumentName = this.tmpDocName,
            this.editNameVisible = !1
        },
        endThumbnailDrag(e) {
            const {oldIndex: t, newIndex: i} = e;
            t < this.selectedPicIndex && i >= this.selectedPicIndex ? this.selectedPicIndex -= 1 : t > this.selectedPicIndex && i <= this.selectedPicIndex ? this.selectedPicIndex += 1 : t == this.selectedPicIndex && (this.selectedPicIndex = i)
        },
        handleWheel(e) {
            this.wheel_flag || (this.executeWheelAction(e),
            this.wheel_flag = !0),
            this.wheelDebounceTimeout && clearTimeout(this.wheelDebounceTimeout),
            this.wheelDebounceTimeout = setTimeout( () => {
                this.wheel_flag = !1
            }
            , 200)
        },
        executeWheelAction(e) {
            e.deltaY > 0 ? this.handleSelectPrevious() : this.handleSelectNext()
        }
    }
})
  , P = e => (re("data-v-b415453b"),
e = e(),
de(),
e)
  , xs = {
    key: 0,
    class: "close-confirm-modal confirm-modal"
}
  , ea = {
    class: "header"
}
  , ta = {
    key: 0
}
  , ia = {
    key: 1
}
  , sa = {
    key: 2
}
  , aa = {
    key: 0,
    class: "content"
}
  , oa = {
    key: 1,
    class: "footer-btns"
}
  , na = {
    key: 2,
    class: "content"
}
  , la = {
    key: 3,
    class: "footer-btns clip-exit-btns"
}
  , ra = {
    key: 4,
    class: "content"
}
  , da = {
    key: 5,
    class: "footer-btns exit-footer-btns"
}
  , ca = {
    key: 0,
    class: "close-confirm-modal upload-success"
}
  , ha = {
    class: "title"
}
  , ma = {
    class: "title-desc"
}
  , pa = {
    class: "process"
}
  , ua = {
    class: "progress"
}
  , ga = {
    key: 0,
    class: "footer-btns create-process-btn"
}
  , fa = {
    key: 1,
    class: "success-overlay"
}
  , va = P( () => a("div", null, [a("i", {
    class: "icon-ic_down_success"
})], -1))
  , ba = {
    class: "text"
}
  , wa = {
    key: 0,
    class: "close-confirm-modal delete-pic"
}
  , _a = {
    class: "header"
}
  , ya = {
    class: "footer-btns delete-img-btns"
}
  , $a = {
    class: "shoot-header"
}
  , Ca = {
    class: "mode-shoot"
}
  , Ta = {
    key: 0,
    class: "shoot-title"
}
  , ka = {
    key: 1,
    class: "edit-wrapper"
}
  , Da = {
    class: "step-name"
}
  , Pa = {
    class: "doc-name-container"
}
  , La = {
    key: 2,
    class: "replace-wrapper"
}
  , Ia = {
    key: 3,
    class: "edit-wrapper edit-wrapper-title"
}
  , Aa = {
    class: "title"
}
  , Sa = {
    class: "camera-canvas"
}
  , Ea = {
    key: 0,
    class: "camera-canvas",
    id: "canvas"
}
  , Ma = {
    key: 1,
    id: "offscreenVideo",
    class: "camera-canvas",
    src: "",
    muted: "",
    autoplay: "",
    playsinline: ""
}
  , Ua = P( () => a("img", {
    src: Ct,
    alt: "暂无可用设备"
}, null, -1))
  , Ra = {
    key: 2,
    class: "show-tip"
}
  , Fa = P( () => a("img", {
    src: Tt,
    alt: ""
}, null, -1))
  , Ba = {
    class: "text"
}
  , Va = {
    key: 1,
    class: "footer-btns"
}
  , Na = {
    class: "camera-btn base-btn"
}
  , Oa = {
    style: {
        "text-align": "center"
    }
}
  , ja = {
    key: 0,
    alt: "",
    src: bt
}
  , Wa = {
    key: 1,
    alt: "",
    src: wt
}
  , Ha = P( () => a("div", null, [a("img", {
    class: "upper-icon",
    alt: "",
    src: kt
})], -1))
  , za = {
    class: "device-option device-option-title",
    style: {
        color: "rgba(156, 156, 156, 1)"
    }
}
  , Ga = ["onClick"]
  , Ka = {
    key: 0,
    class: "selected-icon",
    alt: "",
    src: _t
}
  , Ya = P( () => a("img", {
    alt: "",
    src: Dt
}, null, -1))
  , Qa = P( () => a("img", {
    alt: "",
    src: Pt
}, null, -1))
  , Xa = [Qa]
  , qa = {
    key: 0,
    class: "thumb-image"
}
  , Ja = {
    class: "thumb-image-wrapper"
}
  , Za = ["src"]
  , xa = {
    class: "image-loading-mask"
}
  , eo = P( () => a("img", {
    class: "loading-mask",
    src: qe,
    alt: ""
}, null, -1))
  , to = [eo]
  , io = {
    class: "image-wrapper"
}
  , so = {
    class: "image-loading-mask"
}
  , ao = P( () => a("img", {
    class: "loading-mask",
    src: qe,
    alt: ""
}, null, -1))
  , oo = [ao]
  , no = {
    style: {
        cursor: "pointer"
    },
    alt: "",
    src: yt
}
  , lo = {
    key: 2,
    class: "central-interaction-zone"
}
  , ro = ["onClick"]
  , co = ["onMouseenter"]
  , ho = ["onClick"]
  , mo = ["src"]
  , po = {
    class: "draggable-item-index"
}
  , uo = P( () => a("div", {
    class: "draggable-footer-add-button"
}, null, -1))
  , go = P( () => a("i", {
    class: "icon-ic_filter_upload"
}, null, -1))
  , fo = P( () => a("i", {
    class: "icon-ic_filter_shoot"
}, null, -1))
  , vo = {
    key: 1,
    class: "loading",
    src: $t
}
  , bo = {
    key: 0,
    class: "filter-tools"
}
  , wo = P( () => a("i", {
    class: "icon-ic_filter_rotate_left"
}, null, -1))
  , _o = P( () => a("i", {
    class: "icon-ic_filter_rotate_right"
}, null, -1))
  , yo = {
    key: 0,
    class: "icon-ic_filter_clip"
}
  , $o = {
    key: 1,
    class: "icon-ic_filter_clip_all"
}
  , Co = {
    key: 2
}
  , To = {
    key: 3
}
  , ko = P( () => a("div", {
    class: "divider"
}, null, -1))
  , Do = {
    class: "filter-item replace-item base-btn"
}
  , Po = P( () => a("i", {
    class: "icon-ic_filter_retake"
}, null, -1))
  , Lo = P( () => a("i", {
    class: "icon-ic_filter_upload"
}, null, -1))
  , Io = P( () => a("i", {
    class: "icon-ic_filter_shoot"
}, null, -1))
  , Ao = P( () => a("i", {
    class: "icon-ic_filter_delete"
}, null, -1))
  , So = {
    key: 1,
    class: "filter-panel"
}
  , Eo = {
    class: "filter-select-all"
}
  , Mo = {
    class: "filter-wrapper"
}
  , Uo = ["onClick"]
  , Ro = ["src", "alt"]
  , Fo = {
    key: 3,
    class: "footer-btns footer-rotate-btns"
}
  , Bo = {
    key: 4,
    class: "clip-bottom"
};
function Vo(e, t, i, s, o, l) {
    var g;
    const n = M("el-progress")
      , r = M("el-input")
      , h = M("el-popover")
      , u = M("UploadSingleFileView")
      , w = M("draggable")
      , y = M("ImageCanvas")
      , S = M("el-checkbox")
      , $ = M("el-button");
    return c(),
    p("div", {
        onKeydown: t[37] || (t[37] = (...d) => e.handleKeyDown && e.handleKeyDown(...d)),
        class: "shoot-dialog",
        style: F({
            width: e.mode === "SHOOT" || e.mode === "REPLACE" ? e.videoStyle.width : "1080px"
        })
    }, [(c(),
    j(se, {
        to: "body"
    }, [a("div", {
        class: "bg-layer",
        onWheel: t[0] || (t[0] = v( () => {}
        , ["self", "prevent"]))
    }, null, 32)])), (c(),
    j(se, {
        to: "body"
    }, [e.showConfirmModal ? (c(),
    p("div", xs, [a("div", ea, [e.mode === "SHOOT" || e.mode === "REPLACE" ? (c(),
    p("span", ta, m(e.$t("cs_645_webcamera_21")), 1)) : e.mode === "CLIP" ? (c(),
    p("span", ia, m(e.$t("cs_655_web_drtp01")), 1)) : (c(),
    p("span", sa, m(e.$t("cs_645_webcamera_08")), 1))]), e.mode === "SHOOT" || e.mode === "REPLACE" ? (c(),
    p("div", aa, m(e.$t("cs_645_webcamera_22")), 1)) : f("", !0), e.mode === "SHOOT" || e.mode === "REPLACE" ? (c(),
    p("div", oa, [a("div", {
        onClick: t[1] || (t[1] = v( (...d) => e.handleConfirmExit && e.handleConfirmExit(...d), ["stop"])),
        class: "exit base-btn"
    }, m(e.$t("web_3_desktop_exit")), 1), a("div", {
        onClick: t[2] || (t[2] = v(d => e.showConfirmModal = !1, ["stop"])),
        class: "continue"
    }, m(e.$t("cs_645_webcamera_17")), 1)])) : f("", !0), e.mode === "CLIP" ? (c(),
    p("div", na, m(e.$t("cs_655_web_drtp02")), 1)) : f("", !0), e.mode === "CLIP" ? (c(),
    p("div", la, [a("div", {
        onClick: t[3] || (t[3] = v(d => e.showConfirmModal = !1, ["stop"])),
        class: "exit base-btn"
    }, m(e.$t("cs_655_web_drtp03")), 1), a("div", {
        onClick: t[4] || (t[4] = v( (...d) => e.handleConfirmExit && e.handleConfirmExit(...d), ["stop"])),
        class: "continue"
    }, m(e.$t("web_3_upload_cancel")), 1)])) : f("", !0), e.mode === "EDIT" ? (c(),
    p("div", ra, m(e.$t("cs_645_webcamera_09")), 1)) : f("", !0), e.mode === "EDIT" ? (c(),
    p("div", da, [a("div", {
        onClick: t[5] || (t[5] = v( (...d) => e.handleConfirmExit && e.handleConfirmExit(...d), ["stop"])),
        class: "exit base-btn"
    }, m(e.$t("web_3_desktop_exit")), 1), a("div", {
        onClick: t[6] || (t[6] = v(d => e.showConfirmModal = !1, ["stop"])),
        class: "continue"
    }, m(e.$t("cs_645_webcamera_10")), 1)])) : f("", !0)])) : f("", !0)])), (c(),
    j(se, {
        to: "body"
    }, [e.showCreateModal ? (c(),
    p("div", ca, [a("div", ha, [a("span", ma, m(e.$t("web_3_uploading")) + "...", 1), a("span", pa, m(e.uploadProcess) + " / " + m(e.imageList.length), 1)]), a("div", ua, [k(n, {
        style: {
            width: "100%"
        },
        color: "#19BCAA",
        "show-text": !1,
        percentage: e.uploadProcess / e.imageList.length * 100
    }, null, 8, ["percentage"])]), e.uploadProcessImageIndex ? f("", !0) : (c(),
    p("div", ga, [a("div", {
        onClick: t[7] || (t[7] = (...d) => e.handleCancelUpload && e.handleCancelUpload(...d)),
        class: "cancel-btn base-btn"
    }, m(e.$t("web_3_upload_cancel")), 1)])), e.uploadProcess >= e.imageList.length ? (c(),
    p("div", fa, [va, a("div", ba, m(e.$t("cs_655_web_drtp06")), 1)])) : f("", !0)])) : f("", !0)])), (c(),
    j(se, {
        to: "body"
    }, [e.showDeleteConfirm ? (c(),
    p("div", wa, [a("div", _a, [a("span", null, m(e.$t("cs_655_web_drtp05")), 1)]), a("div", ya, [a("div", {
        onClick: t[8] || (t[8] = v(d => e.showDeleteConfirm = !1, ["stop"])),
        class: "exit"
    }, m(e.$t("web_3_cancel")), 1), a("div", {
        onClick: t[9] || (t[9] = v( (...d) => e.handleConfirmDelete && e.handleConfirmDelete(...d), ["stop"])),
        class: "continue base-btn-danger"
    }, m(e.$t("cs_delete")), 1)])])) : f("", !0)])), a("div", $a, [a("div", Ca, [e.mode === "SHOOT" ? (c(),
    p("div", Ta, m(e.$t("cs_645_webcamera_23")), 1)) : e.mode === "CLIP" ? (c(),
    p("div", ka, [a("div", Da, m(e.$t("cs_645_webcamera_19")), 1), a("div", Pa, [_(a("div", {
        class: "doc-name",
        onClick: t[10] || (t[10] = v( (...d) => e.handleEditDocName && e.handleEditDocName(...d), ["stop"]))
    }, m(e.defaultDocumentName), 513), [[C, !e.editNameVisible]]), _(a("div", {
        class: "edit-rename",
        onClick: t[11] || (t[11] = v( (...d) => e.handleEditDocName && e.handleEditDocName(...d), ["stop"])),
        src: "./images/ic_rename.png"
    }, null, 512), [[C, !e.editNameVisible]])]), _(k(r, {
        ref: "elInput",
        maxlength: 32,
        modelValue: e.defaultDocumentName,
        "onUpdate:modelValue": t[12] || (t[12] = d => e.defaultDocumentName = d),
        onFocus: t[13] || (t[13] = d => {
            d.currentTarget.select()
        }
        )
    }, null, 8, ["modelValue"]), [[C, e.editNameVisible]]), _(a("img", {
        class: "base-btn tick",
        style: F({
            opacity: e.defaultDocumentName.trim() ? 1 : .3
        }),
        src: mt,
        onClick: t[14] || (t[14] = v( (...d) => e.confirmChangeDocName && e.confirmChangeDocName(...d), ["stop"]))
    }, null, 4), [[C, e.editNameVisible]]), _(a("img", {
        class: "base-btn cross",
        src: pt,
        onClick: t[15] || (t[15] = v( (...d) => e.cancelChangeDocumentName && e.cancelChangeDocumentName(...d), ["stop"]))
    }, null, 512), [[C, e.editNameVisible]])])) : e.mode === "REPLACE" ? (c(),
    p("div", La, [a("img", {
        onClick: t[16] || (t[16] = v(d => e.mode = "EDIT", ["stop"])),
        src: ut,
        style: {
            width: "24px",
            "margin-left": "10px",
            cursor: "pointer"
        }
    }), a("div", null, m(e.$t("cs_645_webcamera_07")), 1)])) : e.mode === "EDIT" ? (c(),
    p("div", Ia, [a("div", {
        onClick: t[17] || (t[17] = v( (...d) => e.handleBackToClip && e.handleBackToClip(...d), ["stop"])),
        class: "clip"
    }, m(e.$t("cs_645_webcamera_19")), 1), a("div", Aa, m(e.$t("cs_655_web_drtp04")), 1)])) : f("", !0), e.mode !== "REPLACE" ? (c(),
    p("img", {
        key: 4,
        class: "close-icon base-btn",
        onClick: t[18] || (t[18] = v( (...d) => e.closeDialog && e.closeDialog(...d), ["stop"])),
        src: gt,
        alt: ""
    })) : f("", !0)])]), a("div", Sa, [e.deviceList.length ? (c(),
    p("canvas", Ea)) : f("", !0), e.isValidCamera ? (c(),
    p("video", Ma)) : f("", !0)]), e.mode === "SHOOT" || e.mode === "REPLACE" ? (c(),
    p("div", {
        key: 0,
        class: "video-wrapper",
        style: F(e.videoStyle)
    }, [e.isValidCamera ? (c(),
    p("video", {
        key: 0,
        style: F({
            ...e.videoStyleInverse,
            ...e.videoRotateStyle
        }),
        id: "video",
        class: U(["camera-video", e.captureLoading ? "camera-video-animation" : ""]),
        src: "",
        muted: "",
        autoplay: "",
        playsinline: ""
    }, null, 6)) : (c(),
    p("div", {
        key: 1,
        class: "no-camera",
        style: F(e.videoStyle)
    }, [Ua, a("div", null, m(e.$t("cs_645_webcamera_29")), 1)], 4)), e.isValidCamera && e.showQuickTip ? (c(),
    p("div", Ra, [Fa, a("div", Ba, m(e.$t("cs_645_webcamera_14")), 1), a("img", {
        class: "close-icon",
        onClick: t[19] || (t[19] = v( (...d) => e.handleCloseTip && e.handleCloseTip(...d), ["stop"])),
        src: ft,
        alt: "关闭"
    })])) : f("", !0)], 4)) : f("", !0), e.mode === "SHOOT" || e.mode === "REPLACE" ? (c(),
    p("div", Va, [k(h, {
        "popper-style": "box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.16), 0px 6px 15px 0px rgba(0, 0, 0, 0.10);padding: 6px;border: 1px solid #DCDCDC;",
        transition: "none",
        "popper-class": "shoot-customize-popper",
        placement: "top-end",
        offset: 18,
        width: 280,
        trigger: "hover"
    }, {
        reference: T( () => [a("div", Na, [a("div", Oa, [e.isValidCamera ? (c(),
        p("img", ja)) : (c(),
        p("img", Wa)), a("div", null, m(e.isValidCamera ? e.$t("cs_645_webcamera_15") : "无摄像头"), 1)]), Ha])]),
        default: T( () => [a("div", za, m(e.$t("cs_645_webcamera_30")), 1), (c(!0),
        p(W, null, H(e.deviceList, d => (c(),
        p("div", {
            onClick: v(b => e.handleSelectCamera(d), ["stop"]),
            class: U(["base-btn", "device-option", d.deviceId === e.deviceId ? "device-option-active" : ""]),
            key: d.deviceId
        }, [a("div", null, m(d.label), 1), d.deviceId === e.deviceId ? (c(),
        p("img", Ka)) : f("", !0)], 10, Ga))), 128))]),
        _: 1
    }), a("div", {
        onClick: t[20] || (t[20] = v(d => e.handleRotate(-90), ["stop"])),
        class: U(["rotate-btn", "base-btn", e.isValidCamera ? "" : "disable-rotate"])
    }, [Ya, a("div", null, m(e.$t("cs_645_webcamera_13")), 1)], 2), a("div", {
        onClick: t[21] || (t[21] = v( (...d) => e.handleShootCamera && e.handleShootCamera(...d), ["stop"])),
        class: U(["shoot-btn", e.isValidCamera ? "" : "disable-shoot", "no-border-radius"])
    }, [a("div", {
        class: U(["shoot-btn", e.isValidCamera ? "" : "disable-shoot", e.isCaptureActive ? "shoot-btn-active" : ""])
    }, Xa, 2)], 2), e.mode !== "REPLACE" ? (c(),
    p("div", qa, [a("div", {
        class: "base-btn",
        style: {
            display: "flex",
            "justify-content": "center",
            "align-items": "center"
        },
        onClick: t[22] || (t[22] = v( (...d) => e.handleShootFinish && e.handleShootFinish(...d), ["stop"]))
    }, [a("div", Ja, [_(a("div", {
        class: "num"
    }, m(e.imageList.length), 513), [[C, e.imageList.length]]), e.imageList.length ? (c(),
    p("div", {
        key: 0,
        class: "image-wrapper",
        style: F({
            transform: "rotate(".concat(e.imageList[e.imageList.length - 1].rotateDegree, "deg)"),
            cursor: "pointer"
        })
    }, [a("img", {
        class: "image",
        src: e.imageList[e.imageList.length - 1].url,
        alt: ""
    }, null, 8, Za), _(a("div", xa, to, 512), [[C, e.captureLoading]])], 4)) : f("", !0), _(a("div", io, [_(a("div", so, oo, 512), [[C, e.captureLoading]])], 512), [[C, e.imageList.length === 0 && e.captureLoading]])]), _(a("img", no, null, 512), [[C, e.imageList.length > 0]])])])) : f("", !0)])) : f("", !0), e.mode === "EDIT" || e.mode === "CLIP" ? (c(),
    p("div", lo, [k(w, {
        class: "thumbnail-draggable-wrapper",
        modelValue: e.imageList,
        "onUpdate:modelValue": t[27] || (t[27] = d => e.imageList = d),
        animation: "100",
        "ghost-class": "ghost",
        "force-fallback": "",
        "item-key": "thumbnail-draggable",
        onEnd: e.endThumbnailDrag
    }, St({
        item: T( ({element: d, index: b}) => [a("div", {
            ref: "draggableImgRef".concat(b),
            class: U(["draggable-item", {
                selected: !d.loading && e.selectedPicIndex == b
            }]),
            onClick: v(R => e.selectImage(b), ["stop"])
        }, [a("div", {
            class: U(["draggable-img-wrapper", {
                isloading: d.loading
            }]),
            onMouseenter: R => e.hoverIndex = b,
            onMouseleave: t[23] || (t[23] = R => e.hoverIndex = -1)
        }, [_(a("img", {
            onClick: v(R => e.handleDelete(b), ["stop"]),
            src: vt,
            class: "draggable-img-delete-icon"
        }, null, 8, ho), [[C, e.imageList.length > 1 && e.hoverIndex === b]]), a("img", {
            style: F({
                transform: e.mode === "CLIP" ? "rotate(".concat(d.rotateDegree, "deg)") : ""
            }),
            src: e.mode === "EDIT" ? d.enhanceUrl : d.url,
            class: "draggable-img"
        }, null, 12, mo)], 42, co), a("div", po, m(b + 1), 1)], 10, ro)]),
        _: 2
    }, [e.mode === "CLIP" ? {
        name: "footer",
        fn: T( () => [k(h, {
            visible: e.showAddPicBtnPopover,
            "onUpdate:visible": t[26] || (t[26] = d => e.showAddPicBtnPopover = d),
            "show-arrow": !1,
            trigger: "click",
            width: "120",
            offset: -32,
            transition: "none",
            "hide-after": 0,
            "popper-class": "draggable-footer-popover shoot-customize-popper"
        }, {
            reference: T( () => [uo]),
            default: T( () => [a("div", {
                class: "device-option base-btn",
                onClick: t[24] || (t[24] = (...d) => e.handleAddLocalPic && e.handleAddLocalPic(...d))
            }, [go, k(u, {
                multiple: e.continueUploadFileSingle,
                onFiles: e.handleContinueUpload
            }, null, 8, ["multiple", "onFiles"])]), a("div", {
                onClick: t[25] || (t[25] = v( (...d) => e.handleContinue && e.handleContinue(...d), ["stop"])),
                class: "device-option base-btn"
            }, [fo, a("div", null, m(e.$t("cs_645_webcamera_20")), 1)])]),
            _: 1
        }, 8, ["visible"])]),
        key: "0"
    } : void 0]), 1032, ["modelValue", "onEnd"]), a("div", {
        class: "pic-main",
        onWheel: t[28] || (t[28] = v( (...d) => e.handleWheel && e.handleWheel(...d), ["prevent"]))
    }, [((g = e.imageList[e.selectedPicIndex]) == null ? void 0 : g.loading) == !1 ? (c(),
    j(y, {
        key: 0,
        onEnd: e.handlePositionChange,
        showBorder: e.showBorder,
        enhancedUrl: e.imageList[e.selectedPicIndex].enhanceUrl,
        dataStr: e.imageList[e.selectedPicIndex].interaction_position,
        selectedImage: e.imageList[e.selectedPicIndex],
        imageUrl: e.imageList[e.selectedPicIndex].url
    }, null, 8, ["onEnd", "showBorder", "enhancedUrl", "dataStr", "selectedImage", "imageUrl"])) : (c(),
    p("img", vo))], 32), k(Et, {
        name: "toolbar-switch",
        mode: "out-in"
    }, {
        default: T( () => [e.mode === "CLIP" ? (c(),
        p("div", bo, [a("div", {
            onClick: t[29] || (t[29] = v(d => e.handleRotateImg(-90), ["stop"])),
            class: "filter-item rotate-item base-btn"
        }, [wo, a("div", null, m(e.$t("web_3_image_turnleft")), 1)]), a("div", {
            onClick: t[30] || (t[30] = v(d => e.handleRotateImg(90), ["stop"])),
            class: "filter-item rotate-item base-btn"
        }, [_o, a("div", null, m(e.$t("web_3_image_turnright")), 1)]), a("div", {
            class: "filter-item clip-item base-btn",
            onClick: t[31] || (t[31] = v( (...d) => e.handleClipStateSwitch && e.handleClipStateSwitch(...d), ["stop"]))
        }, [e.clipMode === "AUTO" ? (c(),
        p("i", yo)) : f("", !0), e.clipMode === "ALL" ? (c(),
        p("i", $o)) : f("", !0), e.clipMode === "ALL" ? (c(),
        p("div", Co, m(e.$t("web_3_image_crop_all")), 1)) : (c(),
        p("div", To, m(e.$t("web_3_image_cropauto")), 1))]), ko, k(h, {
            "popper-style": "max-width: 120px; min-width: 120px;box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.16), 0px 6px 15px 0px rgba(0, 0, 0, 0.10);padding: 6px 0;border: 1px solid #DCDCDC;",
            transition: "none",
            offset: 2,
            "show-arrow": !1,
            "popper-class": "shoot-customize-popper",
            placement: "right",
            width: 168,
            trigger: "hover"
        }, {
            reference: T( () => [a("div", Do, [Po, a("div", null, m(e.$t("cs_645_webcamera_16")), 1)])]),
            default: T( () => [a("div", {
                class: "device-option base-btn",
                onClick: t[32] || (t[32] = d => e.continueUploadFileSingle = !0)
            }, [Lo, k(u, {
                multiple: e.continueUploadFileSingle,
                onFiles: e.handleContinueUploadSingle
            }, null, 8, ["multiple", "onFiles"])]), a("div", {
                onClick: t[33] || (t[33] = v( (...d) => e.handleShootReplace && e.handleShootReplace(...d), ["stop"])),
                class: "device-option base-btn"
            }, [Io, a("div", null, m(e.$t("cs_645_webcamera_20")), 1)])]),
            _: 1
        }), a("div", {
            onClick: t[34] || (t[34] = v(d => e.handleDelete(e.selectedPicIndex), ["stop"])),
            class: U(["base-btn-red", "base-btn", "filter-item", "delete-item", e.imageList.length === 1 ? "not-delete" : ""])
        }, [Ao, a("div", null, m(e.$t("cs_delete")), 1)], 2)])) : e.mode === "EDIT" ? (c(),
        p("div", So, [a("div", Eo, [k(S, {
            modelValue: e.applyFilterToAllPic,
            "onUpdate:modelValue": t[35] || (t[35] = d => e.applyFilterToAllPic = d),
            label: e.$t("cs_645_webcamera_03")
        }, null, 8, ["modelValue", "label"])]), a("div", Mo, [(c(!0),
        p(W, null, H(e.filterConfig, d => (c(),
        p("div", {
            class: U(["filter-box", d.mode === e.imageList[e.selectedPicIndex].mode ? "active-filter-box" : ""]),
            onClick: v(b => e.handleFilterSelect(d), ["stop"]),
            key: d.mode
        }, [d.pic && e.imageList[e.selectedPicIndex] ? (c(),
        p("img", {
            key: 0,
            class: U(d.mode === e.imageList[e.selectedPicIndex].mode ? "active-img" : ""),
            src: d.pic,
            alt: d.label
        }, null, 10, Ro)) : f("", !0), e.imageList[e.selectedPicIndex] ? (c(),
        p("div", {
            key: 1,
            class: U([d.mode === e.imageList[e.selectedPicIndex].mode ? "active-label" : "", "label"])
        }, m(d.label), 3)) : f("", !0)], 10, Uo))), 128))])])) : f("", !0)]),
        _: 1
    })])) : f("", !0), e.mode === "EDIT" ? (c(),
    p("div", Fo, [a("div", {
        onClick: t[36] || (t[36] = v( (...d) => e.handleCreateDoc && e.handleCreateDoc(...d), ["stop"])),
        class: "create-doc base-btn-blue"
    }, [a("div", null, m(e.$t("web_3_upload")), 1)])])) : f("", !0), e.mode === "CLIP" ? (c(),
    p("div", Bo, [k($, {
        onClick: e.handleUploadDirectly,
        class: "clip-bottom-btn update-all-btn"
    }, {
        default: T( () => [B(m(e.$t("cs_654_web_drtp01")), 1)]),
        _: 1
    }, 8, ["onClick"]), k($, {
        text: "",
        class: "clip-bottom-btn next-step-btn",
        onClick: e.handleEnterFilterMode
    }, {
        default: T( () => [B(m(e.$t("web_3_nextstep")), 1)]),
        _: 1
    }, 8, ["onClick"])])) : f("", !0)], 36)
}
const Qo = Q(Zs, [["render", Vo], ["__scopeId", "data-v-b415453b"]]);
export {Yo as d, Ko as f, Qo as s, Ei as t};
