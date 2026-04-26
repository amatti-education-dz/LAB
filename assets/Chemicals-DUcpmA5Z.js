import{J as ot,u as dt,r as x,q as ct,g as k,o as pt,ab as mt,j as e,Q as He,b as se,c as Te,F as xt,S as B,m as j,ac as ht,e as bt,d as g,ad as ue,T as fe,N as ut,A as Y,f as D,w as Ge,X as ge,h as W,O as G,i as ye,k as I,s as X,l as ft,ae as ve,C as gt,n as yt,p as vt,t as Ie,v as Le,af as wt}from"./index-BqQ5yAYn.js";import{l as ie,L as ne,a as le}from"./loggingService-ByuXA96t.js";import{P as jt}from"./pdfService-wHwne_qe.js";import{Q as Nt}from"./QRScanner-CDKmK5NB.js";import{D as qe}from"./download-BjtUQO61.js";import{P as kt}from"./plus-B71UFQ1e.js";import{F as Ct}from"./funnel-CvRJiFhe.js";import{S as St}from"./square-pen-Dl1lLa_3.js";import{T as Pe}from"./trash-2-CBOgCXcU.js";import{R as zt}from"./rotate-ccw-BqembuF0.js";import{C as Dt}from"./chevron-up-DnYcjEeR.js";import"./jspdf.plugin.autotable-B0mpo1BY.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],Et=ot("wand-sparkles",At),L={GHS01:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/GHS-pictogram-explos.svg/200px-GHS-pictogram-explos.svg.png",GHS02:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/GHS-pictogram-flamme.svg/200px-GHS-pictogram-flamme.svg.png",GHS03:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/GHS-pictogram-rondflam.svg/200px-GHS-pictogram-rondflam.svg.png",GHS04:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/GHS-pictogram-bottle.svg/200px-GHS-pictogram-bottle.svg.png",GHS05:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/GHS-pictogram-acid.svg/200px-GHS-pictogram-acid.svg.png",GHS06:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/GHS-pictogram-skull.svg/200px-GHS-pictogram-skull.svg.png",GHS07:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/GHS-pictogram-exclam.svg/200px-GHS-pictogram-exclam.svg.png",GHS08:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/GHS-pictogram-silhouette.svg/200px-GHS-pictogram-silhouette.svg.png",GHS09:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/GHS-pictogram-pollut.svg/200px-GHS-pictogram-pollut.svg.png"},K={GHS01:"متفجرات",GHS02:"قابل للاشتعال",GHS03:"مؤكسد",GHS04:"غاز تحت الضغط",GHS05:"أكال / مسبب للتآكل",GHS06:"سمية حادة (قاتل)",GHS07:"تهيج / تحسس / خطر",GHS08:"خطر صحي جسيم",GHS09:"خطر بيئي"};function Mt({isNested:oe=!1}){var $e;const[de]=dt(),[f,_e]=x.useState([]),[Re,Ue]=x.useState(!0),[V,ce]=x.useState(""),[A,we]=x.useState(de.get("filter")==="low"),[i,C]=x.useState(null),[Fe,E]=x.useState(!1),[q,J]=x.useState(null),Z=x.useRef(null),[je,Ne]=x.useState(!1),[P,ee]=x.useState(!1),[ke,Ce]=x.useState(!1),[Me,te]=x.useState(!1),[Se,ze]=x.useState({current:0,total:0}),[v,_]=x.useState([]),[c,De]=x.useState(null),[Oe,R]=x.useState(!1),[y,Qe]=x.useState(null),[Be,pe]=x.useState(!1),me=t=>{if(!t)return"غير محدد";if(!t.includes("-"))return t;const[a,s,r]=t.split("-");return!a||!s||!r?t:`${r}/${s}/${a}`},[o,h]=x.useState({nameEn:"",nameAr:"",formula:"",casNumber:"",storageTemp:"",unit:"g",quantity:0,state:"solid",hazardClass:"safe",ghs:[],shelf:"",expiryDate:"",notes:""});x.useEffect(()=>{const t=ct(k("chemicals")),a=pt(t,s=>{const r=s.docs.map(l=>({id:l.id,...l.data()}));_e(r);const n=de.get("id");if(n){let l=n;n.startsWith("APP_ID_")&&(l=n.split("_").slice(2,-1).join("_")),ce(l);const b=r.find(d=>d.id===n||d.id===l);b?C(b):r.length>0&&!i&&C(r[0])}else r.length>0&&!i&&C(r[0]);Ue(!1)},s=>{W(s,G.LIST,"chemicals")});return()=>a()},[de]);const Ye=async t=>{t.preventDefault();try{if(q){const{id:a}=q;await ye(I(k("chemicals"),a),{...o,updatedAt:X()}),await ie(ne.UPDATE,le.CHEMICALS,`تعديل بيانات المادة: ${o.nameAr}`,a)}else{const a=await ft(k("chemicals"),{...o,createdAt:X()});await ie(ne.CREATE,le.CHEMICALS,`إضافة مادة جديدة: ${o.nameAr}`,a.id)}E(!1),J(null),h({nameEn:"",nameAr:"",formula:"",casNumber:"",storageTemp:"",unit:"g",quantity:0,state:"solid",hazardClass:"safe",ghs:[],shelf:"",expiryDate:"",notes:""})}catch(a){W(a,q?G.UPDATE:G.CREATE,"chemicals")}},We=async()=>{const t=o.nameEn||o.nameAr;if(!t){alert("يرجى إدخال اسم المادة أولاً (بالعربية أو الإنجليزية)");return}ee(!0);try{const a=await ve(t);if(a){let s="";if(a.expiryYears>0){const r=new Date;r.setFullYear(r.getFullYear()+a.expiryYears),s=r.toISOString().split("T")[0]}h(r=>({...r,nameEn:a.nameEn||r.nameEn,nameAr:a.nameAr||r.nameAr,formula:a.formula||r.formula,casNumber:a.casNumber||r.casNumber,storageTemp:a.storageTemp||r.storageTemp,hazardClass:a.hazardClass||r.hazardClass,ghs:a.ghs||r.ghs,expiryDate:s||r.expiryDate,notes:a.notes||r.notes}))}else alert("لم نتمكن من الحصول على معلومات دقيقة لهذه المادة. يرجى إدخالها يدوياً.")}catch(a){console.error("Smart fill error:",a),alert("حدث خطأ أثناء محاولة الحصول على المعلومات الذكية.")}finally{ee(!1)}},Ae=async t=>{const a=t||i;if(a){ee(!0);try{const s=await ve(a.nameEn||a.nameAr);s?(De(s),t&&C(t),R(!0)):alert("لم نتمكن من الحصول على اقتراحات تحديث لهذه المادة.")}catch(s){console.error("Smart update request error:",s),alert("حدث خطأ أثناء طلب التحديث الذكي.")}finally{ee(!1)}}},Xe=async()=>{if(!(!i||!c))try{let t=i.expiryDate;if(c.expiryYears>0){const a=new Date;a.setFullYear(a.getFullYear()+c.expiryYears),t=a.toISOString().split("T")[0]}await ye(I(k("chemicals"),i.id),{nameEn:c.nameEn,nameAr:c.nameAr,formula:c.formula,casNumber:c.casNumber,storageTemp:c.storageTemp,hazardClass:c.hazardClass,ghs:c.ghs,expiryDate:t,notes:c.notes,updatedAt:X()}),R(!1),De(null),alert("تم تحديث معلومات المادة بنجاح!")}catch(t){W(t,G.UPDATE,`chemicals/${i.id}`)}},Ke=async()=>{if(te(!1),!await gt()){alert("يرجى اختيار مفتاح API الخاص بك لاستخدام ميزة التحديث الذكي.");return}Ce(!0),ze({current:0,total:f.length});let a=0,s=0;for(let r=0;r<f.length;r++){const n=f[r];ze({current:r+1,total:f.length});try{const l=await ve(n.nameEn||n.nameAr);if(l){let b=n.expiryDate;if(l.expiryYears>0){const d=new Date;d.setFullYear(d.getFullYear()+l.expiryYears),b=d.toISOString().split("T")[0]}await ye(I(k("chemicals"),n.id),{nameEn:l.nameEn||n.nameEn,nameAr:l.nameAr||n.nameAr,formula:l.formula||n.formula,casNumber:l.casNumber||n.casNumber,storageTemp:l.storageTemp||n.storageTemp,hazardClass:l.hazardClass||n.hazardClass,ghs:l.ghs||n.ghs,expiryDate:b||n.expiryDate,notes:l.notes||n.notes,updatedAt:X()}),a++}else s++}catch(l){console.error(`Error updating chemical ${n.nameEn}:`,l),s++;const b=(l==null?void 0:l.message)||String(l);if(b.includes("quota")||b.includes("RESOURCE_EXHAUSTED")){alert("تم إيقاف التحديث التلقائي بسبب تجاوز حصة الاستخدام المسموح بها (Quota Exceeded). يرجى المحاولة لاحقاً أو التحقق من حساب Gemini API الخاص بك.");break}}await new Promise(l=>setTimeout(l,5e3))}Ce(!1),alert(`اكتمل التحديث الذكي!
تم تحديث: ${a} مادة بنجاح
فشل: ${s} مادة`)},Ve=async(t,a)=>{try{await yt(I(k("chemicals"),t)),await ie(ne.DELETE,le.CHEMICALS,`حذف المادة: ${a}`,t),(i==null?void 0:i.id)===t&&C(f.find(s=>s.id!==t)||null)}catch(s){W(s,G.DELETE,`chemicals/${t}`)}},Je=()=>{const t=window.open("","_blank");if(!t){alert("يرجى السماح بالنوافذ المنبثقة لطباعة القائمة");return}const a=$.filter(m=>m.ghs&&m.ghs.length>0||m.hazardClass==="danger").length,r=new Date().toLocaleDateString("ar-DZ",{day:"2-digit",month:"2-digit",year:"numeric"}),n="بوحازم عبد المجيد - عين كرشة",l="أم البواقي",b="2025/2026",d=$.map((m,U)=>{const H=m.ghs&&m.ghs.length>0||m.hazardClass==="danger",F=(m.ghs||[]).map(u=>`<div class="ghs-pic"><img src="${L[u]}" alt="${u}" /></div>`).join("");return`
        <tr class="${H?"hazardous-row":""}">
          <td class="text-center">${U+1}</td>
          <td class="font-bold text-lg">${m.nameAr}</td>
          <td class="text-sm en-font">${m.nameEn}</td>
          <td class="mono-font">${m.formula||"—"}</td>
          <td class="text-center">${m.unit}</td>
          <td class="text-center font-bold">${m.quantity}</td>
          <td class="text-center">${m.state==="solid"?"صلب":m.state==="liquid"?"سائل":"غاز"}</td>
          <td class="text-center">${m.shelf||"—"}</td>
          <td><div class="ghs-container">${F}</div></td>
          <td class="notes-cell">${m.notes||"—"}</td>
        </tr>
      `}).join("");t.document.write(`
      <html dir="rtl" lang="ar">
        <head>
          <meta charset="UTF-8">
          <title>سجل المواد الكيميائية — ${n}</title>
          <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
          <style>
            :root {
              --primary: #006494;
              --on-primary: #ffffff;
              --primary-container: #cbe6ff;
              --secondary: #50606e;
              --surface: #fdfcff;
              --surface-variant: #dee3eb;
              --outline: #71787e;
              --error: #ba1a1a;
            }

            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { 
              font-family: 'Cairo', sans-serif; 
              direction: rtl; 
              background: #f8f9fb; 
              color: #1a1c1e;
              padding: 20px;
            }

            #toolbar {
              position: fixed; top: 0; left: 0; right: 0; 
              z-index: 100; background: #1a1c1e; color: white;
              padding: 12px 24px; display: flex; align-items: center; gap: 15px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            }
            #toolbar h3 { flex: 1; font-weight: 800; font-size: 16px; }
            .tb-btn { 
              padding: 10px 20px; border: none; border-radius: 20px; 
              cursor: pointer; font-weight: 700; font-size: 13px; font-family: Cairo;
              transition: all 0.2s;
            }
            .tb-print { background: #00b894; color: white; }
            .tb-close { background: #e74c3c; color: white; }

            .page-sheet {
              background: white;
              width: 297mm;
              min-height: 210mm;
              margin: 60px auto 20px;
              padding: 15mm;
              box-shadow: 0 10px 30px rgba(0,0,0,0.1);
              display: flex;
              flex-direction: column;
            }

            /* --- Header Layout --- */
            .official-header {
              display: grid;
              grid-template-columns: 1fr 2fr 1fr;
              margin-bottom: 20px;
              padding-bottom: 15px;
              border-bottom: 2px solid var(--primary);
              align-items: start;
            }
            .oh-right { text-align: right; line-height: 1.6; font-size: 10pt; }
            .oh-center { text-align: center; line-height: 1.5; font-size: 11pt; font-weight: 800; }
            .oh-left { text-align: left; line-height: 1.6; font-size: 10pt; }
            .oh-center img { height: 50px; margin-bottom: 5px; }

            .main-title {
              text-align: center;
              font-size: 22pt;
              font-weight: 900;
              color: var(--primary);
              margin: 10px 0;
              letter-spacing: -0.5px;
              text-shadow: 1px 1px 0 rgba(0,0,0,0.05);
            }

            .registry-meta {
              display: flex;
              justify-content: center;
              gap: 30px;
              margin-bottom: 20px;
              padding: 10px;
              background: var(--primary-container);
              border-radius: 12px;
              font-weight: 700;
              color: var(--on-primary-container);
            }

            /* --- Table Design --- */
            .registry-table {
              width: 100%;
              border-collapse: separate;
              border-spacing: 0;
              font-size: 10pt;
              margin-bottom: 20px;
            }
            .registry-table th {
              background: #f0f4f8;
              color: var(--secondary);
              font-weight: 800;
              padding: 12px 8px;
              border: 1px solid #d1d5db;
              text-align: center;
              font-size: 9pt;
            }
            .registry-table td {
              padding: 10px 8px;
              border: 1px solid #e5e7eb;
              line-height: 1.4;
            }
            .registry-table tr:nth-child(even) { background: #fafbfc; }
            .hazardous-row { background-color: #fff1f2 !important; }
            .hazardous-row td:first-child { border-right: 4px solid var(--error); }

            .text-center { text-align: center; }
            .font-bold { font-weight: 800; }
            .mono-font { font-family: 'JetBrains Mono', monospace; font-size: 9pt; }
            .en-font { font-family: sans-serif; color: var(--secondary); }
            .notes-cell { font-size: 9pt; color: #444; font-style: italic; }

            .ghs-container { display: flex; gap: 4px; justify-content: center; flex-wrap: wrap; }
            .ghs-pic { 
              width: 32px; height: 32px; border: 1px solid #ddd; 
              border-radius: 4px; background: white; padding: 2px;
              display: flex; align-items: center; justify-content: center;
            }
            .ghs-pic img { width: 100%; height: 100%; object-fit: contain; }

            /* --- Footer --- */
            .registry-footer {
              margin-top: auto;
              padding-top: 30px;
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 20px;
            }
            .sign-box {
              text-align: center;
              border: 1px solid #eee;
              padding: 15px;
              border-radius: 12px;
              background: #fafafa;
            }
            .sign-box h4 { margin-bottom: 50px; font-weight: 800; text-decoration: underline; color: var(--secondary); }
            
            .inst-stamp {
              width: 40mm;
              height: 25mm;
              border: 2px dashed #ccc;
              border-radius: 12px;
              margin: 10px auto;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 8pt;
              color: #999;
            }

            @media print {
              #toolbar { display: none !important; }
              body { background: white !important; padding: 0 !important; }
              .page-sheet { 
                margin: 0 !important; box-shadow: none !important; 
                width: 100% !important; padding: 10mm !important;
                border-radius: 0 !important;
              }
              @page { size: A4 landscape; margin: 0; }
              .registry-table th { background: #eee !important; -webkit-print-color-adjust: exact; }
              .hazardous-row { background-color: #fff1f1 !important; -webkit-print-color-adjust: exact; }
              .registry-meta { background: #eee !important; color: black !important; -webkit-print-color-adjust: exact; }
            }
          </style>
        </head>
        <body>
          <div id="toolbar">
              <h3>📄 جرد المواد الكيميائية — سجل المخبر</h3>
              <button class="tb-btn tb-print" onclick="window.print()">🖨️ طباعة السجل</button>
              <button class="tb-btn tb-close" onclick="window.close()">✕ إغلاق</button>
          </div>

          <div class="page-sheet">
            <header class="official-header">
              <div class="oh-right">
                <div>وزارة التربية الوطنية</div>
                <div>مديرية التربية لولاية: ${l}</div>
                <div>المؤسسة: ${n}</div>
              </div>
              <div class="oh-center">
                <p>الجمهورية الجزائرية الديمقراطية الشعبية</p>
                <div class="main-title">سجل جرد المواد الكيميائية للمخبر</div>
              </div>
              <div class="oh-left">
                <div>السنة الدراسية: ${b}</div>
                <div>تاريخ الطباعة: ${r}</div>
                <div class="inst-stamp">ختم المؤسسة</div>
              </div>
            </header>

            <div class="registry-meta">
              <span>إجمالي المواد: ${$.length}</span>
              <span style="border-right: 2px solid rgba(0,0,0,0.1); padding-right: 20px;">المواد الخطرة: ${a}</span>
            </div>

            <table class="registry-table">
              <thead>
                <tr>
                  <th width="40">رقم</th>
                  <th>الاسم العربي للمادة</th>
                  <th>Désignation (En)</th>
                  <th width="120">الصيغة</th>
                  <th width="60">الوحدة</th>
                  <th width="60">الكمية</th>
                  <th width="70">الحالة</th>
                  <th width="60">الرف</th>
                  <th width="100">GHS Pictograms</th>
                  <th>ملاحظات إضافية</th>
                </tr>
              </thead>
              <tbody>
                ${d}
              </tbody>
            </table>

            <footer class="registry-footer">
              <div class="sign-box"><h4>المخبري الرئيسي</h4></div>
              <div class="sign-box"><h4>المقتصد</h4></div>
              <div class="sign-box"><h4>مدير المؤسسة</h4></div>
              <div class="sign-box"><h4>مفتش التربية الوطنية</h4></div>
            </footer>
          </div>
        </body>
      </html>
    `),t.document.close()},Ze=async()=>{const t=["#","الاسم العلمي","الاسم العربي","الصيغة","الكمية","الرف","تاريخ الصلاحية"],a=w.map((s,r)=>[r+1,s.nameEn||"",s.nameAr||"",s.formula||"",`${s.quantity} ${s.unit}`,s.shelf||"",me(s.expiryDate)]);await jt.generateTablePDF("تقرير جرد المواد الكيميائية",t,a,`chemicals_inventory_${new Date().toISOString().split("T")[0]}.pdf`)},et=()=>{const t=D.json_to_sheet(w.map(s=>({"الاسم (EN)":s.nameEn,"الاسم (AR)":s.nameAr,الصيغة:s.formula,"رقم CAS":s.casNumber,الكمية:s.quantity,الوحدة:s.unit,الحالة:s.state,الخطورة:s.hazardClass,الرف:s.shelf,"تاريخ الصلاحية":s.expiryDate,ملاحظات:s.notes}))),a=D.book_new();D.book_append_sheet(a,t,"Inventory"),Ge(a,`chemical_inventory_${new Date().toISOString().split("T")[0]}.xlsx`)},tt=async t=>{var r;const a=(r=t.target.files)==null?void 0:r[0];if(!a)return;Ne(!0);const s=new FileReader;s.onload=async n=>{var l;try{const b=(l=n.target)==null?void 0:l.result,d=vt(b,{type:"binary",cellDates:!0}),m=d.SheetNames[0],U=d.Sheets[m],H=D.sheet_to_json(U),F=p=>{if(!p)return"";if(p instanceof Date)return p.toISOString().split("T")[0];const T=new Date(p);return isNaN(T.getTime())?String(p).trim():T.toISOString().split("T")[0]},u=(p,T)=>{const he=Object.keys(p);for(const O of T){const Q=he.find(N=>N.toLowerCase().trim()===O.toLowerCase().trim());if(Q)return p[Q]}},M=Ie(Le);H.forEach(p=>{const T=u(p,["PRODUIT CHIMIQUE","Name","nameEn","Product","Chemical"])||"Unnamed Chemical",he=u(p,["الاسم العربي","الاسم","Arabic Name","nameAr","Arabic"])||"",O=u(p,["الكمية","Quantity","quantity","Qty","Amount"]),Q=typeof O=="number"?O:parseFloat(String(O||"0").replace(/[^0-9.]/g,""));let N=String(u(p,["الحالة","State","state","Status"])||"solid").trim(),ae="solid";N==="صلب"||N.toLowerCase()==="solid"?ae="solid":N==="سائل"||N.toLowerCase()==="liquid"?ae="liquid":(N==="غاز"||N.toLowerCase()==="gas")&&(ae="gas");let re=String(u(p,["الخطورة","Hazard","hazardClass","Danger"])||"safe").trim(),be="safe";re==="خطر"||re.toLowerCase()==="danger"?be="danger":(re==="آمن"||re.toLowerCase()==="safe")&&(be="safe");const nt=I(k("chemicals"));M.set(nt,{nameEn:String(T).trim(),nameAr:String(he).trim(),formula:u(p,["الصيغة","Formula","formula"])||"",unit:u(p,["الوحدة","Unit","unit"])||"g",quantity:isNaN(Q)?0:Q,state:ae,hazardClass:be,ghs:Array.isArray(p.GHS)?p.GHS:p.GHS?String(p.GHS).split(",").map(lt=>lt.trim()):[],shelf:u(p,["الرف","Shelf","shelf"])||"",expiryDate:F(u(p,["الصلاحية","Expiry","تاريخ الانتهاء","expiryDate"])),notes:u(p,["ملاحظات","Notes","notes"])||"",createdAt:X()})}),await M.commit(),alert(`تم استيراد ${H.length} مادة بنجاح!`)}catch(b){console.error("Error importing XLS:",b),alert("حدث خطأ أثناء استيراد الملف. يرجى التأكد من صيغة الملف.")}finally{Ne(!1),Z.current&&(Z.current.value="")}},s.readAsBinaryString(a)},xe=t=>{const a=window.open("","_blank");if(!a){alert("يرجى السماح بالنوافذ المنبثقة لطباعة البطاقات");return}const s=new Date,r="2025/2026",n="بوحازم عبد المجيد - عين كرشة",l="أم البواقي",b=t.map((d,m)=>{var u,M;const U=d.state==="solid"?"صلب":d.state==="liquid"?"سائل":"غاز",H=d.hazardClass==="danger"?(u=d.ghs)!=null&&u[0]?K[d.ghs[0]]:"خطر":"آمن",F=(M=d.ghs)!=null&&M[0]?"☠️":"—";return`
        <div class="pcard">
          <div class="ph-container">
            <div class="ph">
              <div class="ph-r">مديرية التربية لولاية: ${l}<br>ثانوية: ${n}</div>
              <div class="ph-c">الجمهورية الجزائرية الديمقراطية الشعبية<br>وزارة التربية الوطنية</div>
              <div class="ph-l">
                <div>السنة الدراسية: ${r}</div>
                <div class="header-stamp">ختم المؤسسة</div>
              </div>
            </div>
          </div>

          <div class="pcard-badge">رقم البطاقة: ${m+1}</div>
          <h1 class="pcard-title">بطاقة مخزون مادة كيميائية</h1>
          
          <div class="ic-meta-expressive">
             <div class="ic-field main">
                <span class="l">اسم المادة (AR)</span>
                <span class="v">${d.nameAr}</span>
             </div>
             <div class="ic-field sub">
                <span class="l">NOM DU PRODUIT</span>
                <span class="v en">${d.nameEn}</span>
             </div>
          </div>

          <div class="ic-grid-info">
             <div class="ic-info-box">
                <span class="l">الصيغة</span>
                <span class="v en-bold">${d.formula||"—"}</span>
             </div>
             <div class="ic-info-box">
                <span class="l">الحالة</span>
                <span class="v">${U}</span>
             </div>
             <div class="ic-info-box">
                <span class="l">الرف</span>
                <span class="v">${d.shelf||"—"}</span>
             </div>
             <div class="ic-info-box danger">
                <span class="l">GHS</span>
                <span class="v emoji">${F}</span>
             </div>
          </div>

          <div class="ic-safety-strip">
             <b>طبيعة الخطورة:</b> ${H} 
             <span style="margin-right: 15px">|</span> 
             <b>وحدة القياس:</b> ${d.unit}
          </div>

          <div class="ic-table-container">
            <table class="ic-tbl">
              <thead>
                <tr>
                  <th rowspan="2" width="12%">التاريخ</th>
                  <th colspan="2">سند الطلب</th>
                  <th rowspan="2">المصدر</th>
                  <th rowspan="2" width="10%">الثمن</th>
                  <th colspan="3">الكمية</th>
                  <th rowspan="2">ملاحظات</th>
                </tr>
                <tr><th>خروج</th><th>دخول</th><th>خروج</th><th>دخول</th><th>المخزون</th></tr>
              </thead>
              <tbody>
                <tr class="initial-stock">
                  <td>${s.toLocaleDateString("en-GB")}</td>
                  <td>-</td><td>-</td>
                  <td>رصيد أول المدة</td>
                  <td>-</td>
                  <td>-</td><td>${d.quantity}</td><td>${d.quantity}</td>
                  <td>رصيد ابتدائي</td>
                </tr>
                ${Array(14).fill("<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>").join("")}
                <tr class="carry-over">
                  <td colspan="5">الرصيد المنقول لظهر البطاقة</td>
                  <td></td><td></td><td class="bold">..........</td>
                  <td>ينقل ←</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="pcard back">
          <div class="back-header">
             <span>تتمة حركة المخزون — ${d.nameAr}</span>
             <span class="ref">REF: ${m+1}</span>
          </div>

          <div class="ic-table-container">
            <table class="ic-tbl">
              <thead>
                <tr>
                  <th rowspan="2" width="12%">التاريخ</th>
                  <th colspan="2">سند الطلب</th>
                  <th rowspan="2">المصدر</th>
                  <th rowspan="2" width="10%">الثمن</th>
                  <th colspan="3">الكمية</th>
                  <th rowspan="2">ملاحظات</th>
                </tr>
                <tr><th>خروج</th><th>دخول</th><th>خروج</th><th>دخول</th><th>المخزون</th></tr>
              </thead>
              <tbody>
                <tr class="initial-stock">
                  <td colspan="5">المجموع المنقول من وجه البطاقة</td>
                  <td></td><td></td><td>..........</td>
                  <td>نقل ←</td>
                </tr>
                ${Array(22).fill("<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>").join("")}
              </tbody>
            </table>
          </div>

          <div class="ic-safety-rules">
             <h3>⚠️ تعليمات السلامة الخاصة بالتخزين</h3>
             <div class="rules-box">
                ${d.notes||"يجب حفظ هذه المادة في ظروف ملائمة بعيداً عن الرطوبة والحرارة ووفق معايير السلامة المنصوص عليها في دليل المختبرات."}
             </div>
          </div>
        </div>
      `}).join("");a.document.write(`
      <html dir="rtl" lang="ar">
        <head>
          <meta charset="UTF-8">
          <title>بطاقة مخزون</title>
          <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
          <style>
            :root {
              --primary: #006494;
              --on-primary: #ffffff;
              --primary-container: #cbe6ff;
              --on-primary-container: #001e30;
              --secondary: #50606e;
              --tertiary: #65587b;
              --error: #ba1a1a;
              --outline: #71787e;
              --surface: #fdfcff;
              --surface-variant: #dee3eb;
            }

            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { 
              font-family: 'Cairo', sans-serif; 
              direction: rtl; 
              background: #f0f2f5; 
              color: #1a1c1e;
              padding: 20px;
            }

            #toolbar {
              position: fixed; top: 0; left: 0; right: 0; 
              z-index: 100; background: #1a1c1e; color: white;
              padding: 12px 24px; display: flex; align-items: center; gap: 15px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            }
            #toolbar h3 { flex: 1; font-weight: 800; font-size: 16px; }
            .tb-btn { 
              padding: 10px 20px; border: none; border-radius: 20px; 
              cursor: pointer; font-weight: 700; font-size: 13px; font-family: Cairo;
              transition: all 0.2s;
            }
            .tb-print { background: #00b894; color: white; }
            .tb-close { background: #e74c3c; color: white; }

            #body { padding-top: 60px; max-width: 900px; margin: 0 auto; }

            .pcard {
              background: white;
              width: 148mm;
              height: 210mm;
              margin: 20px auto;
              padding: 8mm;
              border-radius: 24px;
              box-shadow: 0 10px 25px rgba(0,0,0,0.08);
              display: flex;
              flex-direction: column;
              border: 1px solid rgba(0,0,0,0.05);
              position: relative;
              overflow: hidden;
            }

            .pcard.back { border-style: dashed; }

            .ph-container {
              background: var(--surface-variant);
              margin: -8mm -8mm 4mm -8mm;
              padding: 6mm 8mm;
              border-radius: 0 0 24px 24px;
            }
            .ph {
              display: grid; grid-template-columns: 1fr 1.5fr 1fr;
              font-size: 7.5pt; gap: 4px; align-items: start; color: var(--secondary);
            }
            .ph-r { text-align: right; line-height: 1.5; }
            .ph-c { text-align: center; font-weight: 800; line-height: 1.5; }
            .ph-l { text-align: left; line-height: 1.5; }

            .header-stamp {
              margin-top: 5px;
              width: 35mm;
              height: 20mm;
              border: 1px dashed var(--outline);
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 6pt;
              color: var(--outline);
              font-weight: 400;
            }

            .pcard-badge {
              position: absolute; top: 12mm; left: 8mm;
              background: var(--primary-container); color: var(--on-primary-container);
              padding: 2px 12px; border-radius: 12px; font-size: 8pt; font-weight: 700;
            }

            .pcard-title {
              text-align: center; font-size: 14pt; font-weight: 900;
              color: var(--primary); margin: 4mm 0;
            }

            .ic-meta-expressive { display: flex; flex-direction: column; gap: 4px; margin-bottom: 6mm; }
            .ic-field { border-radius: 12px; padding: 6px 12px; display: flex; align-items: center; justify-content: space-between; }
            .ic-field.main { background: #f0f4f9; border-right: 4px solid var(--primary); }
            .ic-field.sub { background: #fafbfc; border-right: 4px solid var(--outline); font-size: 9pt; }
            .ic-field .l { font-weight: 700; color: var(--secondary); font-size: 8.5pt; }
            .ic-field .v { font-weight: 800; font-size: 11pt; }
            .ic-field .v.en { font-family: sans-serif; font-size: 9pt; text-transform: uppercase; }

            .ic-grid-info { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-bottom: 6mm; }
            .ic-info-box { background: #fff; border: 1px solid var(--surface-variant); border-radius: 12px; padding: 6px; text-align: center; }
            .ic-info-box .l { display: block; font-size: 7pt; font-weight: 700; color: var(--tertiary); margin-bottom: 2px; }
            .ic-info-box .v { font-weight: 800; font-size: 9.5pt; }
            .ic-info-box .v.en-bold { font-family: monospace; font-weight: 900; font-size: 10pt; }
            .ic-info-box.danger { border-color: var(--error); background: #fff8f8; }

            .ic-safety-strip { background: var(--on-primary-container); color: white; border-radius: 8px; padding: 5px 12px; font-size: 8.5pt; margin-bottom: 6mm; }

            .ic-table-container { flex: 1; margin-bottom: 4mm; }
            .ic-tbl { width: 100%; border-collapse: collapse; font-size: 8pt; table-layout: fixed; }
            .ic-tbl th, .ic-tbl td { border: 0.5pt solid var(--surface-variant); padding: 4px; text-align: center; }
            .ic-tbl th { background: #e8ecef; color: var(--secondary); font-weight: 800; font-size: 7pt; }
            .ic-tbl td { height: 6mm; }
            tr.initial-stock { background: #f0fdf4; font-weight: 600; }
            .bold { font-weight: 900; }

            .back-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--primary); padding-bottom: 5px; margin-bottom: 6mm; font-weight: 900; font-size: 11pt; color: var(--primary); }
            .rules-box { background: #fffafa; border: 1px solid #ffeded; padding: 10px; border-radius: 12px; font-size: 8.5pt; color: #444; line-height: 1.6; }

            @media print {
              #toolbar { display: none !important; }
              body { background: white !important; padding: 0 !important; }
              @page { size: A5 portrait; margin: 3mm; }
              .pcard {
                width: 100% !important; height: calc(210mm - 6mm) !important;
                margin: 0 !important; border: 1px solid #000 !important;
                border-radius: 0 !important; box-shadow: none !important;
                page-break-after: always !important; padding: 5mm !important;
              }
              .ph-container { border-radius: 0 !important; margin-bottom: 2mm !important; }
              .ic-meta-expressive .ic-field { background: white !important; border: 1px solid #eee !important; box-shadow: none !important; }
              .ic-tbl th { background: #f0f0f0 !important; border: 0.5pt solid #000 !important; print-color-adjust: exact; }
              .ic-tbl td { border: 0.5pt solid #000 !important; }
            }
          </style>
        </head>
        <body>
          <div id="toolbar">
              <h3>🎨 جرد كيميائي — ${t.length} عنصر</h3>
              <button class="tb-btn tb-print" onclick="window.print()">🖨️ بدء الطباعة</button>
              <button class="tb-btn tb-close" onclick="window.close()">✕ إغلاق المعاينة</button>
          </div>
          <div id="body">
            ${b}
          </div>
        </body>
      </html>
    `),a.document.close()},at=t=>{const a=window.open("","_blank");a&&(a.document.write(`
      <html dir="rtl">
        <head>
          <title>بطاقة مادة - ${t.nameEn}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; }
            .header { text-align: center; border-bottom: 2px solid #2b3d22; padding-bottom: 20px; margin-bottom: 30px; }
            .title { font-size: 24px; font-weight: bold; color: #2b3d22; }
            .details { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
            .item { border-bottom: 1px solid #eee; padding: 10px 0; }
            .label { font-weight: bold; color: #5c6146; }
            .hazard { color: #e11d48; font-weight: bold; }
            .footer { margin-top: 50px; text-align: left; font-size: 12px; color: #999; }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="title">بطاقة تعريف مادة كيميائية</div>
            <div>نظام تسيير المخابر المدرسية</div>
          </div>
          <div class="details">
            <div class="item"><span class="label">PRODUIT CHIMIQUE:</span> ${t.nameEn}</div>
            <div class="item"><span class="label">الاسم العربي:</span> ${t.nameAr}</div>
            <div class="item"><span class="label">الصيغة الكيميائية:</span> ${t.formula}</div>
            <div class="item"><span class="label">رقم CAS:</span> ${t.casNumber||"غير متوفر"}</div>
            <div class="item"><span class="label">درجة التخزين:</span> ${t.storageTemp||"غير متوفر"}</div>
            <div class="item"><span class="label">الحالة:</span> ${t.state}</div>
            <div class="item"><span class="label">الكمية الحالية:</span> ${t.quantity} ${t.unit}</div>
            <div class="item"><span class="label">الرف:</span> ${t.shelf}</div>
            <div class="item"><span class="label">الصلاحية:</span> ${t.expiryDate||"غير محدد"}</div>
            <div class="item" style="grid-column: span 2;">
              <span class="label">رموز السلامة GHS:</span>
              <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
                ${(t.ghs||[]).map(s=>`
                  <div style="display: flex; flex-direction: column; align-items: center; border: 1px solid #ccc; padding: 5px; border-radius: 8px; width: 70px; background: #fff;">
                    <img src="${L[s]}" style="width: 40px; height: 40px;" />
                    <span style="font-size: 9px; margin-top: 4px; text-align: center; font-weight: bold;">${K[s]||s}</span>
                  </div>
                `).join("")}
              </div>
            </div>
            <div class="item"><span class="label">تصنيف الخطورة:</span> <span class="${t.hazardClass==="danger"?"hazard":""}">${t.hazardClass==="danger"?"خطر":"آمن"}</span></div>
            <div class="item" style="grid-column: span 2;"><span class="label">ملاحظات:</span> ${t.notes||"لا توجد"}</div>
          </div>
          <div class="footer">طبع بتاريخ: ${new Date().toLocaleString("ar-DZ")}</div>
          <script>window.print();<\/script>
        </body>
      </html>
    `),a.document.close())},S=t=>{let a="asc";y&&y.key===t&&y.direction==="asc"&&(a="desc"),Qe({key:t,direction:a})},rt=t=>{_(a=>a.includes(t)?a.filter(s=>s!==t):[...a,t])},st=()=>{v.length===w.length?_([]):_(w.map(t=>t.id))},it=async()=>{if(window.confirm(`هل أنت متأكد من حذف ${v.length} مادة؟`))try{const t=Ie(Le);v.forEach(a=>{t.delete(I(k("chemicals"),a))}),await t.commit(),await ie(ne.DELETE,le.CHEMICALS,`حذف جماعي لـ ${v.length} مادة`),_([]),alert("تم الحذف بنجاح!")}catch(t){W(t,G.DELETE,"chemicals/bulk")}},w=f.filter(t=>{var r,n,l;const a=((r=t.nameEn)==null?void 0:r.toLowerCase().includes(V.toLowerCase()))||((n=t.nameAr)==null?void 0:n.toLowerCase().includes(V.toLowerCase()))||((l=t.formula)==null?void 0:l.toLowerCase().includes(V.toLowerCase())),s=!A||t.quantity<10;return a&&s}),$=mt.useMemo(()=>{const t=[...w];return y!==null&&t.sort((a,s)=>{const r=a[y.key],n=s[y.key];return r===void 0||n===void 0?0:r<n?y.direction==="asc"?-1:1:r>n?y.direction==="asc"?1:-1:0}),t},[w,y]),z=t=>(y==null?void 0:y.key)===t?y.direction==="asc"?e.jsx(Dt,{size:14,className:"mr-1"}):e.jsx(wt,{size:14,className:"mr-1"}):e.jsx("div",{className:"w-[14px] mr-1"}),Ee=f.filter(t=>t.quantity<10).length;return e.jsxs("div",{className:g("space-y-10 max-w-7xl mx-auto pb-20",!oe&&"px-4"),children:[!oe&&e.jsxs("header",{className:"flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-4",children:[e.jsxs("div",{className:"text-right space-y-1",children:[e.jsx("h1",{className:"text-4xl font-black text-primary tracking-tighter",children:"المخزن الكيميائي"}),e.jsx("p",{className:"text-secondary/80 text-base font-medium",children:"إدارة وتتبع المحاليل والكواشف الكيميائية"})]}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("input",{type:"file",ref:Z,onChange:tt,className:"hidden",accept:".xls,.xlsx"}),e.jsxs("button",{onClick:()=>pe(!0),className:"bg-white text-secondary border border-outline/10 px-6 py-3.5 rounded-full flex items-center gap-2 font-bold hover:bg-surface-container-high transition-all active:scale-95 shadow-sm",children:[e.jsx(He,{size:20}),"مسح QR"]}),e.jsxs("button",{onClick:Je,className:"bg-white text-secondary border border-outline/10 px-6 py-3.5 rounded-full flex items-center gap-2 font-bold hover:bg-surface-container-high transition-all active:scale-95 shadow-sm",children:[e.jsx(se,{size:20}),"طباعة القائمة"]}),e.jsxs("button",{onClick:()=>xe($),className:"bg-white text-secondary border border-outline/10 px-6 py-3.5 rounded-full flex items-center gap-2 font-bold hover:bg-surface-container-high transition-all active:scale-95 shadow-sm",children:[e.jsx(se,{size:20,className:"text-primary"}),"طباعة بطاقات المخزون"]}),e.jsxs("button",{onClick:Ze,className:"bg-white text-secondary border border-outline/10 px-6 py-3.5 rounded-full flex items-center gap-2 font-bold hover:bg-surface-container-high transition-all active:scale-95 shadow-sm",children:[e.jsx(Te,{size:20}),"تصدير PDF"]}),e.jsxs("button",{onClick:()=>{var t;return(t=Z.current)==null?void 0:t.click()},disabled:je,className:"bg-white text-secondary border border-outline/10 px-6 py-3.5 rounded-full flex items-center gap-2 font-bold hover:bg-surface-container-high transition-all active:scale-95 shadow-sm disabled:opacity-50",children:[je?e.jsx("div",{className:"w-5 h-5 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin"}):e.jsx(xt,{size:20}),"استيراد XLS"]}),e.jsxs("button",{onClick:et,className:"bg-white text-secondary border border-outline/10 px-6 py-3.5 rounded-full flex items-center gap-2 font-bold hover:bg-surface-container-high transition-all active:scale-95 shadow-sm",children:[e.jsx(qe,{size:20}),"تصدير الجرد"]}),e.jsxs("button",{onClick:()=>te(!0),disabled:ke||f.length===0,className:"bg-primary text-on-primary px-6 py-3.5 rounded-full flex items-center gap-2 font-bold hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20 disabled:opacity-50",title:"تحديث ذكي لجميع المواد في القائمة",children:[ke?e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"}),e.jsxs("span",{className:"text-xs",children:[Se.current,"/",Se.total]})]}):e.jsx(B,{size:20}),"تحديث ذكي للكل"]}),e.jsxs("button",{onClick:()=>E(!0),className:"bg-primary text-on-primary px-8 py-3.5 rounded-full flex items-center gap-2 font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95",children:[e.jsx(kt,{size:20}),"إضافة مادة"]})]})]}),!oe&&e.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[e.jsxs("div",{className:"bg-surface-container-low p-7 rounded-[32px] border border-outline/5 hover:border-outline/20 transition-all group",children:[e.jsx("p",{className:"text-xs text-secondary/60 font-black uppercase tracking-widest mb-3",children:"إجمالي المواد"}),e.jsx("h3",{className:"text-4xl font-black text-primary group-hover:scale-110 transition-transform origin-right",children:f.length})]}),e.jsxs("div",{className:"bg-error-container/40 p-7 rounded-[32px] border border-error/10 hover:border-error/20 transition-all group",children:[e.jsx("p",{className:"text-xs text-on-error-container/60 font-black uppercase tracking-widest mb-3",children:"مواد خطرة"}),e.jsx("h3",{className:"text-4xl font-black text-error group-hover:scale-110 transition-transform origin-right",children:f.filter(t=>t.ghs&&t.ghs.length>0||t.hazardClass==="danger").length})]}),e.jsxs("div",{className:"bg-tertiary-fixed/40 p-7 rounded-[32px] border border-tertiary/10 hover:border-tertiary/20 transition-all group",children:[e.jsx("p",{className:"text-xs text-on-tertiary-fixed/60 font-black uppercase tracking-widest mb-3",children:"تنتهي قريباً"}),e.jsx("h3",{className:"text-4xl font-black text-tertiary group-hover:scale-110 transition-transform origin-right",children:f.filter(t=>{if(!t.expiryDate)return!1;const a=new Date(t.expiryDate),s=new Date;return s.setMonth(s.getMonth()+3),a<s&&a>new Date}).length.toString().padStart(2,"0")})]}),e.jsxs("div",{className:"bg-primary p-7 rounded-[32px] text-on-primary shadow-xl shadow-primary/20 hover:shadow-2xl transition-all group relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("p",{className:"text-white/60 text-xs font-black uppercase tracking-widest mb-3",children:"سعة التخزين"}),e.jsx("h3",{className:"text-4xl font-black",children:"68%"})]})]})]}),Ee>0&&e.jsxs(j.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"bg-error-container/30 backdrop-blur-sm text-on-error-container p-5 rounded-[32px] flex items-center justify-between border border-error/10 shadow-lg shadow-error/5",children:[e.jsxs("div",{className:"flex items-center gap-4 text-error",children:[e.jsx("div",{className:"bg-error p-3 rounded-2xl text-white shadow-lg shadow-error/20",children:e.jsx(ht,{size:20})}),e.jsxs("span",{className:"font-black text-base",children:["تنبيه: يوجد ",Ee," مواد منخفضة المخزون!"]})]}),e.jsx("button",{onClick:()=>we(!A),className:"text-sm font-black underline underline-offset-4 text-error px-6 py-2.5 hover:bg-error/10 rounded-full transition-all active:scale-95",children:A?"عرض الكل":"عرض المواد المنخفضة"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10",children:[e.jsx("div",{className:"lg:col-span-8 space-y-8",children:e.jsxs("div",{className:"bg-surface-container-lowest rounded-[32px] overflow-hidden border border-outline/10 shadow-sm",children:[e.jsxs("div",{className:"p-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-surface-container-low/30 border-b border-outline/5",children:[e.jsxs("div",{className:"relative w-full md:w-80",children:[e.jsx(bt,{className:"absolute right-4 top-1/2 -translate-y-1/2 text-outline/60",size:20}),e.jsx("input",{className:"w-full bg-surface-container-low border border-outline/10 rounded-full pr-12 pl-6 py-3 text-sm font-bold focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all",placeholder:"بحث عن مادة (اسم أو صيغة)...",value:V,onChange:t=>ce(t.target.value)})]}),e.jsx("div",{className:"flex gap-3",children:e.jsx("button",{onClick:()=>we(!A),className:g("p-3 border rounded-full transition-all active:scale-90",A?"bg-primary text-on-primary border-primary shadow-lg shadow-primary/20":"bg-surface-container-low hover:bg-surface-container-high border-outline/10 text-secondary"),title:A?"عرض الكل":"تصفية المواد المنخفضة",children:e.jsx(Ct,{size:22})})})]}),e.jsx("div",{className:"overflow-x-auto scrollbar-hide relative",children:e.jsxs("table",{className:"w-full text-right border-collapse table-auto",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-surface-container-low/50 text-secondary/60 text-[11px] font-black uppercase tracking-widest",children:[e.jsx("th",{className:"px-3 py-5 text-right w-12",children:e.jsx("div",{onClick:st,className:g("w-5 h-5 rounded border-2 cursor-pointer flex items-center justify-center transition-all",v.length===w.length&&w.length>0?"bg-primary border-primary text-white":"border-outline/30 hover:border-primary/50"),children:v.length===w.length&&w.length>0&&e.jsx(ue,{size:12})})}),e.jsx("th",{className:"px-3 py-5 text-right w-10",children:"#"}),e.jsx("th",{className:"px-3 py-5 text-right min-w-[140px] cursor-pointer hover:text-primary transition-colors",onClick:()=>S("nameEn"),children:e.jsxs("div",{className:"flex items-center",children:[z("nameEn"),"المادة (EN/AR)"]})}),e.jsx("th",{className:"px-3 py-5 text-right w-16 hidden sm:table-cell cursor-pointer hover:text-primary transition-colors",onClick:()=>S("formula"),children:e.jsxs("div",{className:"flex items-center",children:[z("formula"),"الصيغة"]})}),e.jsx("th",{className:"px-3 py-5 text-right w-20 cursor-pointer hover:text-primary transition-colors",onClick:()=>S("quantity"),children:e.jsxs("div",{className:"flex items-center",children:[z("quantity"),"الكمية"]})}),e.jsx("th",{className:"px-3 py-5 text-right w-14 hidden lg:table-cell cursor-pointer hover:text-primary transition-colors",onClick:()=>S("state"),children:e.jsxs("div",{className:"flex items-center",children:[z("state"),"الحالة"]})}),e.jsx("th",{className:"px-3 py-5 text-right w-18 cursor-pointer hover:text-primary transition-colors",onClick:()=>S("hazardClass"),children:e.jsxs("div",{className:"flex items-center",children:[z("hazardClass"),"الخطورة"]})}),e.jsx("th",{className:"px-3 py-5 text-right w-20 hidden xl:table-cell",children:"GHS"}),e.jsx("th",{className:"px-3 py-5 text-right w-14 hidden md:table-cell cursor-pointer hover:text-primary transition-colors",onClick:()=>S("shelf"),children:e.jsxs("div",{className:"flex items-center",children:[z("shelf"),"الرف"]})}),e.jsx("th",{className:"px-3 py-5 text-right w-24 cursor-pointer hover:text-primary transition-colors",onClick:()=>S("expiryDate"),children:e.jsxs("div",{className:"flex items-center",children:[z("expiryDate"),"الصلاحية"]})}),e.jsx("th",{className:"px-3 py-5 text-right hidden 2xl:table-cell",children:"ملاحظات"}),e.jsx("th",{className:"px-3 py-5 text-center w-24",children:"إجراءات"})]})}),e.jsx("tbody",{className:"divide-y divide-outline/5",children:Re?e.jsx("tr",{children:e.jsx("td",{colSpan:12,className:"px-8 py-20 text-center text-outline/60 font-bold",children:"جاري التحميل..."})}):$.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:12,className:"px-8 py-20 text-center text-outline/60 font-bold",children:"لا توجد مواد مطابقة للبحث"})}):$.map((t,a)=>{var s;return e.jsxs("tr",{onClick:()=>C(t),className:g("hover:bg-surface-container-low/40 transition-all group cursor-pointer text-base",(i==null?void 0:i.id)===t.id&&"bg-surface-container-low/60 border-r-4 border-primary"),children:[e.jsx("td",{className:"px-3 py-4",children:e.jsx("div",{onClick:r=>{r.stopPropagation(),rt(t.id)},className:g("w-5 h-5 rounded border-2 cursor-pointer flex items-center justify-center transition-all",v.includes(t.id)?"bg-primary border-primary text-white scale-110":"border-outline/30 group-hover:border-primary/50"),children:v.includes(t.id)&&e.jsx(ue,{size:12})})}),e.jsx("td",{className:"px-3 py-4 font-bold text-secondary/60",children:a+1}),e.jsx("td",{className:"px-3 py-4",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"font-black text-primary break-words leading-tight",children:t.nameEn}),e.jsx("span",{className:"text-xs text-secondary/60 break-words mt-0.5",children:t.nameAr})]})}),e.jsx("td",{className:"px-3 py-4 font-mono font-bold text-secondary/80 hidden sm:table-cell text-xs",children:t.formula}),e.jsxs("td",{className:"px-3 py-4 font-black text-primary whitespace-nowrap",children:[t.quantity," ",e.jsx("span",{className:"text-[10px] text-secondary/60",children:t.unit})]}),e.jsx("td",{className:"px-3 py-4 font-bold text-secondary/80 hidden lg:table-cell text-xs",children:t.state==="solid"?"صلب":t.state==="liquid"?"سائل":"غاز"}),e.jsx("td",{className:"px-3 py-4",children:e.jsx("span",{className:g("px-2 py-0.5 rounded-full text-[10px] font-black shadow-sm",t.hazardClass==="danger"?"bg-error-container text-on-error-container":"bg-primary-fixed/40 text-primary"),children:t.hazardClass==="danger"?"خطر":"آمن"})}),e.jsx("td",{className:"px-3 py-4 hidden xl:table-cell",children:e.jsxs("div",{className:"flex gap-1.5",children:[(s=t.ghs)==null?void 0:s.slice(0,3).map((r,n)=>e.jsxs("div",{className:"w-9 h-9 bg-white rounded-lg flex items-center justify-center border border-outline/20 p-1 shadow-sm hover:scale-125 transition-transform z-10 relative group/ghs",title:K[r]||r,children:[L[r]?e.jsx("img",{src:L[r],alt:r,className:"w-full h-full object-contain",referrerPolicy:"no-referrer"}):e.jsx("span",{className:"text-[8px] font-black",children:r}),e.jsx("div",{className:"absolute bottom-full mb-2 hidden group-hover/ghs:block bg-secondary text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-50 pointer-events-none shadow-xl",children:K[r]||r})]},n)),t.ghs&&t.ghs.length>3&&e.jsxs("span",{className:"text-[10px] text-secondary/40 self-center font-bold",children:["+",t.ghs.length-3]})]})}),e.jsx("td",{className:"px-3 py-4 font-bold text-primary hidden md:table-cell text-xs",children:t.shelf}),e.jsx("td",{className:"px-3 py-4",children:e.jsxs("span",{className:g("font-bold whitespace-nowrap text-xs",t.expiryDate&&new Date(t.expiryDate)<new Date?"text-error flex items-center gap-1":"text-secondary/80"),children:[me(t.expiryDate),t.expiryDate&&new Date(t.expiryDate)<new Date&&e.jsx(fe,{size:14})]})}),e.jsx("td",{className:"px-3 py-4 text-xs text-secondary/60 hidden 2xl:table-cell min-w-[200px] leading-relaxed break-words",children:t.notes}),e.jsx("td",{className:"px-3 py-4 text-center",children:e.jsxs("div",{className:"flex gap-1 justify-center",children:[e.jsx("button",{onClick:r=>{r.stopPropagation(),Ae(t)},disabled:P,className:"p-1.5 text-outline/40 hover:text-primary hover:bg-primary/10 transition-all rounded-full active:scale-90",title:"تحديث ذكي",children:e.jsx(B,{size:16})}),e.jsx("button",{onClick:r=>{r.stopPropagation(),J(t),h({nameEn:t.nameEn,nameAr:t.nameAr,formula:t.formula,casNumber:t.casNumber||"",storageTemp:t.storageTemp||"",unit:t.unit,quantity:t.quantity,state:t.state,hazardClass:t.hazardClass,ghs:t.ghs,shelf:t.shelf,expiryDate:t.expiryDate,notes:t.notes}),E(!0)},className:"p-1.5 text-outline/40 hover:text-primary hover:bg-primary/10 transition-all rounded-full active:scale-90",title:"تعديل",children:e.jsx(St,{size:16})}),e.jsx("button",{onClick:r=>{r.stopPropagation(),Ve(t.id,t.nameAr)},className:"p-1.5 text-outline/40 hover:text-error hover:bg-error/10 transition-all rounded-full active:scale-90",title:"حذف",children:e.jsx(Pe,{size:16})})]})})]},t.id)})})]})})]})}),e.jsxs("div",{className:"lg:col-span-4 space-y-8",children:[i?e.jsxs(j.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},className:"bg-surface-container-lowest rounded-[32px] p-10 relative overflow-hidden border border-outline/10 shadow-sm",children:[e.jsx("div",{className:"absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-[120px] -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"}),e.jsxs("div",{className:"relative z-10 space-y-8",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsx("span",{className:g("text-[11px] px-4 py-1.5 rounded-[28px_28px_4px_28px] font-black uppercase tracking-widest shadow-sm",i.hazardClass==="danger"?"bg-error-container text-on-error-container":"bg-tertiary-fixed/60 text-tertiary"),children:i.hazardClass==="danger"?"مادة خطرة":"مادة آمنة"}),i.hazardClass==="danger"&&e.jsx("div",{className:"flex gap-2 text-error animate-pulse",children:e.jsx(fe,{size:28})})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl font-black text-primary mb-1 tracking-tight",children:i.nameEn}),e.jsx("h3",{className:"text-xl font-bold text-secondary mb-2 tracking-tight",children:i.nameAr}),e.jsx("p",{className:"text-lg font-mono font-bold text-secondary/60",children:i.formula})]}),e.jsxs("div",{className:"space-y-5 pt-8 border-t border-outline/5",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-base font-bold text-secondary/60 uppercase tracking-widest",children:"رقم CAS"}),e.jsx("span",{className:"font-black text-primary text-lg",children:i.casNumber||"غير متوفر"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-base font-bold text-secondary/60 uppercase tracking-widest",children:"درجة التخزين"}),e.jsx("span",{className:"font-black text-primary text-lg",children:i.storageTemp||"غير متوفر"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-base font-bold text-secondary/60 uppercase tracking-widest",children:"الحالة"}),e.jsx("span",{className:"font-black text-primary text-lg",children:i.state==="solid"?"صلب":i.state==="liquid"?"سائل":"غاز"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-base font-bold text-secondary/60 uppercase tracking-widest",children:"الرف"}),e.jsx("span",{className:"font-black text-primary text-lg",children:i.shelf})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-base font-bold text-secondary/60 uppercase tracking-widest",children:"الصلاحية"}),e.jsx("span",{className:g("font-black text-lg",i.expiryDate&&new Date(i.expiryDate)<new Date?"text-error":"text-primary"),children:me(i.expiryDate)})]}),e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsx("span",{className:"text-base font-bold text-secondary/60 uppercase tracking-widest",children:"ملاحظات"}),e.jsx("span",{className:"font-black text-primary text-sm text-left flex-1 mr-4 leading-relaxed break-words",children:i.notes||"لا توجد"})]}),i.ghs&&i.ghs.length>0&&e.jsxs("div",{className:"pt-6 border-t border-outline/5",children:[e.jsx("span",{className:"text-[11px] font-black text-secondary/40 uppercase tracking-[0.2em] block mb-4",children:"رموز السلامة GHS"}),e.jsx("div",{className:"grid grid-cols-3 gap-4",children:i.ghs.map((t,a)=>e.jsxs("div",{className:"bg-white p-3 rounded-2xl border border-outline/10 shadow-md hover:shadow-lg hover:border-primary/30 transition-all flex flex-col items-center gap-2 group/card",children:[e.jsx("div",{className:"w-16 h-16 flex items-center justify-center group-hover/card:scale-110 transition-transform",children:L[t]?e.jsx("img",{src:L[t],alt:t,className:"w-full h-full object-contain",referrerPolicy:"no-referrer"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-xs font-black bg-surface-container-high rounded-xl",children:t})}),e.jsx("span",{className:"text-[10px] font-black text-secondary text-center leading-tight",children:K[t]||t})]},a))})]}),e.jsxs("div",{className:"space-y-3 pt-2",children:[e.jsxs("div",{className:"flex justify-between items-end",children:[e.jsx("span",{className:"text-sm font-black text-primary uppercase tracking-widest",children:"مستوى المخزون"}),e.jsxs("span",{className:"text-2xl font-black text-primary",children:[i.quantity," ",e.jsx("span",{className:"text-sm text-secondary/60",children:i.unit})]})]}),e.jsx("div",{className:"h-3 w-full bg-surface-container rounded-full overflow-hidden border border-outline/5 shadow-inner",children:e.jsx("div",{className:"h-full bg-primary rounded-full shadow-sm",style:{width:"70%"}})})]})]}),e.jsxs("div",{className:"flex gap-3 pt-4",children:[e.jsx("button",{onClick:()=>at(i),className:"p-3 bg-surface-container-low hover:bg-surface-container-high border border-outline/10 rounded-full text-primary transition-all active:scale-90",title:"طباعة تعريفية",children:e.jsx(se,{size:22})}),e.jsx("button",{onClick:()=>xe([i]),className:"p-3 bg-surface-container-low hover:bg-surface-container-high border border-outline/10 rounded-full text-primary transition-all active:scale-90",title:"طباعة بطاقة المخزون",children:e.jsx(Te,{size:22})}),e.jsx("button",{onClick:()=>Ae(),disabled:P,className:"p-3 bg-primary-container hover:bg-primary/20 border border-primary/10 rounded-full text-primary transition-all active:scale-90 disabled:opacity-50",title:"تحديث ذكي للمعلومات",children:P?e.jsx("div",{className:"w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin"}):e.jsx(B,{size:22})}),e.jsx("button",{className:"p-3 bg-surface-container-low hover:bg-surface-container-high border border-outline/10 rounded-full text-primary transition-all active:scale-90",title:"توليد رمز QR",children:e.jsx(He,{size:22})})]})]})]},i.id):e.jsx("div",{className:"bg-surface-container-lowest rounded-[32px] p-12 text-center text-outline/60 font-bold border border-outline/10 border-dashed",children:"اختر مادة من القائمة لعرض تفاصيلها المخبرية"}),e.jsxs("div",{className:"bg-primary-container/30 backdrop-blur-sm p-8 rounded-[32px] text-on-primary-container border border-primary/10 relative overflow-hidden group shadow-sm",children:[e.jsxs("div",{className:"relative z-10",children:[e.jsxs("h4",{className:"font-black text-lg mb-3 flex items-center gap-2 text-primary",children:[e.jsx(ut,{size:20}),"تعليمات السلامة"]}),e.jsx("p",{className:"text-sm font-medium text-primary/80 leading-relaxed",children:(i==null?void 0:i.hazardClass)==="danger"?"يجب ارتداء القفازات والنظارات الواقية عند التعامل مع هذه المادة. يحفظ في مكان بارد وجيد التهوية بعيداً عن مصادر الحرارة.":"يرجى اتباع بروتوكولات المختبر القياسية عند التعامل مع هذه المادة لضمان سلامتك وسلامة الزملاء."})]}),e.jsx(fe,{className:"absolute -bottom-6 -left-6 text-primary/5 w-32 h-32 rotate-12 group-hover:rotate-0 transition-transform duration-700"})]})]})]}),e.jsx(Y,{children:v.length>0&&e.jsxs(j.div,{initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},className:"fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-secondary text-white px-8 py-5 rounded-[32px] shadow-2xl flex items-center gap-10 min-w-[500px]",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("span",{className:"text-sm font-black",children:[v.length," مادة مختارة"]}),e.jsx("span",{className:"text-[10px] text-white/60 font-bold",children:"يمكنك إجراء عمليات جماعية على هذه المواد"})]}),e.jsx("div",{className:"h-10 w-px bg-white/10"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("button",{onClick:it,className:"flex items-center gap-2 px-6 py-2.5 rounded-full bg-error/20 text-error-container hover:bg-error hover:text-white transition-all font-black text-sm",children:[e.jsx(Pe,{size:18}),"حذف المختار"]}),e.jsxs("button",{className:"flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all font-black text-sm",onClick:()=>{const t=f.filter(r=>v.includes(r.id)),a=D.json_to_sheet(t.map(r=>({Chemical:r.nameEn,Arabic:r.nameAr,Formula:r.formula,Qty:r.quantity,Unit:r.unit}))),s=D.book_new();D.book_append_sheet(s,a,"SelectedItems"),Ge(s,`selected_chemicals_${new Date().getTime()}.xlsx`)},children:[e.jsx(qe,{size:18}),"تصدير المختار"]}),e.jsxs("button",{onClick:()=>{const t=f.filter(a=>v.includes(a.id));xe(t)},className:"flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/20 text-primary-container hover:bg-primary hover:text-white transition-all font-black text-sm",children:[e.jsx(se,{size:18}),"بطاقات المختار"]}),e.jsx("button",{onClick:()=>_([]),className:"p-2.5 hover:bg-white/10 rounded-full transition-all",children:e.jsx(ge,{size:20})})]})]})}),e.jsx(Y,{children:Fe&&e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[e.jsx(j.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>E(!1),className:"absolute inset-0 bg-primary/20 backdrop-blur-xl"}),e.jsxs(j.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},className:"relative bg-surface w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden border border-outline/10",children:[e.jsxs("div",{className:"p-8 flex justify-between items-center bg-surface-container-low border-b border-outline/5",children:[e.jsx("h3",{className:"text-2xl font-black text-primary",children:q?"تعديل بيانات المادة":"إضافة مادة كيميائية جديدة"}),e.jsx("button",{onClick:()=>{E(!1),J(null),h({nameEn:"",nameAr:"",formula:"",casNumber:"",storageTemp:"",unit:"g",quantity:0,state:"solid",hazardClass:"safe",ghs:[],shelf:"",expiryDate:"",notes:""})},className:"p-2.5 hover:bg-surface-container-high rounded-full transition-all active:scale-90",children:e.jsx(ge,{size:24})})]}),e.jsxs("form",{onSubmit:Ye,className:"p-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-h-[70vh] overflow-y-auto no-scrollbar",children:[e.jsxs("div",{className:"md:col-span-2 flex items-end gap-4",children:[e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"PRODUIT CHIMIQUE"}),e.jsx("input",{required:!0,className:"w-full bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold",value:o.nameEn||"",onChange:t=>h({...o,nameEn:t.target.value})})]}),e.jsxs("button",{type:"button",onClick:We,disabled:P,className:"bg-primary-container text-primary px-6 py-4 rounded-2xl flex items-center gap-2 font-black hover:bg-primary/10 transition-all active:scale-95 disabled:opacity-50 h-[58px]",title:"تعبئة ذكية للمعلومات",children:[P?e.jsx("div",{className:"w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin"}):e.jsx(Et,{size:20}),e.jsx("span",{className:"hidden md:inline",children:"تعبئة ذكية"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"الاسم العربي"}),e.jsx("input",{className:"w-full bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold",value:o.nameAr||"",onChange:t=>h({...o,nameAr:t.target.value})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"الصيغة الكيميائية"}),e.jsx("input",{className:"w-full bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold",value:o.formula||"",onChange:t=>h({...o,formula:t.target.value})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"رقم CAS"}),e.jsx("input",{className:"w-full bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold",value:o.casNumber||"",onChange:t=>h({...o,casNumber:t.target.value})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"درجة حرارة التخزين"}),e.jsx("input",{className:"w-full bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold",value:o.storageTemp||"",onChange:t=>h({...o,storageTemp:t.target.value})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"الحالة"}),e.jsxs("select",{className:"w-full bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold appearance-none cursor-pointer",value:o.state||"solid",onChange:t=>h({...o,state:t.target.value}),children:[e.jsx("option",{value:"solid",children:"صلب (Solid)"}),e.jsx("option",{value:"liquid",children:"سائل (Liquid)"}),e.jsx("option",{value:"gas",children:"غاز (Gas)"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"الكمية"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("input",{type:"number",required:!0,className:"flex-1 bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold",value:o.quantity||0,onChange:t=>h({...o,quantity:Number(t.target.value)})}),e.jsxs("select",{className:"bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold appearance-none cursor-pointer",value:o.unit||"g",onChange:t=>h({...o,unit:t.target.value}),children:[e.jsx("option",{value:"g",children:"g"}),e.jsx("option",{value:"kg",children:"kg"}),e.jsx("option",{value:"ml",children:"ml"}),e.jsx("option",{value:"L",children:"L"}),e.jsx("option",{value:"unit",children:"Unit"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"تصنيف الخطورة"}),e.jsxs("select",{className:"w-full bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold appearance-none cursor-pointer",value:o.hazardClass||"safe",onChange:t=>h({...o,hazardClass:t.target.value}),children:[e.jsx("option",{value:"safe",children:"آمن"}),e.jsx("option",{value:"danger",children:"خطر"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"GHS (فواصل بين الرموز)"}),e.jsx("input",{className:"w-full bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold",placeholder:"GHS01, GHS02...",value:(($e=o.ghs)==null?void 0:$e.join(", "))||"",onChange:t=>h({...o,ghs:t.target.value.split(",").map(a=>a.trim()).filter(Boolean)})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"الرف"}),e.jsx("input",{className:"w-full bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold",value:o.shelf||"",onChange:t=>h({...o,shelf:t.target.value})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"الصلاحية ⚠"}),e.jsx("input",{type:"date",className:"w-full bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold",value:o.expiryDate||"",onChange:t=>h({...o,expiryDate:t.target.value})})]}),e.jsxs("div",{className:"md:col-span-2 space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"ملاحظات"}),e.jsx("textarea",{className:"w-full bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold min-h-[100px]",value:o.notes||"",onChange:t=>h({...o,notes:t.target.value})})]}),e.jsx("div",{className:"md:col-span-2 pt-6",children:e.jsx("button",{type:"submit",className:"w-full bg-primary text-on-primary py-5 rounded-full font-black shadow-xl shadow-primary/20 hover:bg-primary-container hover:shadow-2xl transition-all active:scale-95",children:q?"حفظ التعديلات":"تأكيد إضافة المادة للمخزن"})})]})]})]})}),e.jsx(Y,{children:Me&&e.jsxs("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-6",children:[e.jsx(j.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>te(!1),className:"absolute inset-0 bg-black/60 backdrop-blur-sm"}),e.jsxs(j.div,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},className:"relative bg-surface-container-lowest rounded-[32px] p-10 max-w-md w-full shadow-2xl border border-outline/10 text-right",children:[e.jsx("div",{className:"w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8",children:e.jsx(B,{size:40,className:"text-primary"})}),e.jsx("h3",{className:"text-3xl font-black text-primary mb-4 tracking-tight",children:"تحديث ذكي شامل"}),e.jsxs("p",{className:"text-secondary/80 text-lg leading-relaxed mb-10",children:["هل أنت متأكد من رغبتك في تحديث معلومات ",e.jsx("span",{className:"font-black text-primary",children:f.length})," مادة ذكياً؟",e.jsx("br",{}),e.jsx("br",{}),"قد تستغرق هذه العملية بعض الوقت. سيتم تحديث البيانات تلقائياً بناءً على اقتراحات الذكاء الاصطناعي."]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{onClick:Ke,className:"flex-1 bg-primary text-on-primary py-5 rounded-full font-black shadow-xl shadow-primary/20 hover:bg-primary-container hover:shadow-2xl transition-all active:scale-95",children:"بدء التحديث"}),e.jsx("button",{onClick:()=>te(!1),className:"flex-1 bg-surface border border-outline/20 text-secondary py-5 rounded-full font-black hover:bg-surface-container-high transition-all active:scale-95",children:"إلغاء"})]})]})]})}),e.jsx(Y,{children:Oe&&c&&i&&e.jsxs("div",{className:"fixed inset-0 z-[60] flex items-center justify-center p-4",children:[e.jsx(j.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>R(!1),className:"absolute inset-0 bg-primary/20 backdrop-blur-xl"}),e.jsxs(j.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},className:"relative bg-surface w-full max-w-4xl rounded-[40px] shadow-2xl overflow-hidden border border-outline/10",children:[e.jsxs("div",{className:"p-8 flex justify-between items-center bg-surface-container-low border-b border-outline/5",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"bg-primary/10 p-2.5 rounded-2xl text-primary",children:e.jsx(B,{size:24})}),e.jsx("h3",{className:"text-2xl font-black text-primary",children:"مراجعة التحديث الذكي"})]}),e.jsx("button",{onClick:()=>R(!1),className:"p-2.5 hover:bg-surface-container-high rounded-full transition-all active:scale-90",children:e.jsx(ge,{size:24})})]}),e.jsxs("div",{className:"p-10 space-y-8 max-h-[70vh] overflow-y-auto no-scrollbar",children:[e.jsx("p",{className:"text-secondary/80 font-bold text-center bg-surface-container-low p-4 rounded-2xl border border-outline/5",children:"تم العثور على معلومات أكثر دقة لهذه المادة. يرجى مراجعة التغييرات المقترحة أدناه قبل الموافقة."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx("h4",{className:"text-sm font-black text-secondary/40 uppercase tracking-widest border-b border-outline/5 pb-2",children:"المعلومات الحالية"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-surface-container-low/50 p-4 rounded-2xl",children:[e.jsx("label",{className:"text-[10px] font-black text-secondary/40 uppercase block mb-1",children:"الاسم"}),e.jsxs("p",{className:"font-bold text-secondary",children:[i.nameEn," / ",i.nameAr]})]}),e.jsxs("div",{className:"bg-surface-container-low/50 p-4 rounded-2xl",children:[e.jsx("label",{className:"text-[10px] font-black text-secondary/40 uppercase block mb-1",children:"الصيغة"}),e.jsx("p",{className:"font-mono font-bold text-secondary",children:i.formula})]}),e.jsxs("div",{className:"bg-surface-container-low/50 p-4 rounded-2xl",children:[e.jsx("label",{className:"text-[10px] font-black text-secondary/40 uppercase block mb-1",children:"رقم CAS"}),e.jsx("p",{className:"font-bold text-secondary",children:i.casNumber||"غير متوفر"})]}),e.jsxs("div",{className:"bg-surface-container-low/50 p-4 rounded-2xl",children:[e.jsx("label",{className:"text-[10px] font-black text-secondary/40 uppercase block mb-1",children:"درجة التخزين"}),e.jsx("p",{className:"font-bold text-secondary",children:i.storageTemp||"غير متوفر"})]}),e.jsxs("div",{className:"bg-surface-container-low/50 p-4 rounded-2xl",children:[e.jsx("label",{className:"text-[10px] font-black text-secondary/40 uppercase block mb-1",children:"الخطورة"}),e.jsx("p",{className:"font-bold text-secondary",children:i.hazardClass==="danger"?"خطر":"آمن"})]}),e.jsxs("div",{className:"bg-surface-container-low/50 p-4 rounded-2xl",children:[e.jsx("label",{className:"text-[10px] font-black text-secondary/40 uppercase block mb-1",children:"ملاحظات"}),e.jsx("p",{className:"text-xs text-secondary/60",children:i.notes||"لا توجد"})]})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("h4",{className:"text-sm font-black text-primary uppercase tracking-widest border-b border-primary/10 pb-2",children:"المعلومات المقترحة ✨"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:g("p-4 rounded-2xl border transition-all",c.nameEn!==i.nameEn||c.nameAr!==i.nameAr?"bg-primary/5 border-primary/20 shadow-sm":"bg-surface-container-low/50 border-transparent"),children:[e.jsx("label",{className:"text-[10px] font-black text-primary/40 uppercase block mb-1",children:"الاسم"}),e.jsxs("p",{className:"font-bold text-primary",children:[c.nameEn," / ",c.nameAr]})]}),e.jsxs("div",{className:g("p-4 rounded-2xl border transition-all",c.formula!==i.formula?"bg-primary/5 border-primary/20 shadow-sm":"bg-surface-container-low/50 border-transparent"),children:[e.jsx("label",{className:"text-[10px] font-black text-primary/40 uppercase block mb-1",children:"الصيغة"}),e.jsx("p",{className:"font-mono font-bold text-primary",children:c.formula})]}),e.jsxs("div",{className:g("p-4 rounded-2xl border transition-all",c.casNumber!==i.casNumber?"bg-primary/5 border-primary/20 shadow-sm":"bg-surface-container-low/50 border-transparent"),children:[e.jsx("label",{className:"text-[10px] font-black text-primary/40 uppercase block mb-1",children:"رقم CAS"}),e.jsx("p",{className:"font-bold text-primary",children:c.casNumber})]}),e.jsxs("div",{className:g("p-4 rounded-2xl border transition-all",c.storageTemp!==i.storageTemp?"bg-primary/5 border-primary/20 shadow-sm":"bg-surface-container-low/50 border-transparent"),children:[e.jsx("label",{className:"text-[10px] font-black text-primary/40 uppercase block mb-1",children:"درجة التخزين"}),e.jsx("p",{className:"font-bold text-primary",children:c.storageTemp})]}),e.jsxs("div",{className:g("p-4 rounded-2xl border transition-all",c.hazardClass!==i.hazardClass?"bg-primary/5 border-primary/20 shadow-sm":"bg-surface-container-low/50 border-transparent"),children:[e.jsx("label",{className:"text-[10px] font-black text-primary/40 uppercase block mb-1",children:"الخطورة"}),e.jsx("p",{className:"font-bold text-primary",children:c.hazardClass==="danger"?"خطر":"آمن"})]}),e.jsxs("div",{className:g("p-4 rounded-2xl border transition-all",c.notes!==i.notes?"bg-primary/5 border-primary/20 shadow-sm":"bg-surface-container-low/50 border-transparent"),children:[e.jsx("label",{className:"text-[10px] font-black text-primary/40 uppercase block mb-1",children:"ملاحظات"}),e.jsx("p",{className:"text-xs text-primary/80",children:c.notes})]})]})]})]})]}),e.jsxs("div",{className:"p-10 bg-surface-container-low border-t border-outline/5 flex gap-4",children:[e.jsxs("button",{onClick:Xe,className:"flex-1 bg-primary text-on-primary py-5 rounded-full font-black shadow-xl shadow-primary/20 hover:bg-primary-container hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3",children:[e.jsx(ue,{size:24}),"موافقة وتحديث البيانات"]}),e.jsxs("button",{onClick:()=>R(!1),className:"flex-1 bg-surface border border-outline/20 text-secondary py-5 rounded-full font-black hover:bg-surface-container-high transition-all active:scale-95 flex items-center justify-center gap-3",children:[e.jsx(zt,{size:24}),"إلغاء التغييرات"]})]})]})]})}),e.jsx(Y,{children:Be&&e.jsx(Nt,{onClose:()=>pe(!1),onScan:t=>{pe(!1);let a=t;t.startsWith("APP_ID_")&&(a=t.split("_").slice(2,-1).join("_")),ce(a);const s=f.find(r=>r.id===a||r.id===t);s?(C(s),J(s),E(!0)):alert("عذراً، لم يتم العثور على المادة بهذه الشيفرة.")}})})]})}export{Mt as default};
