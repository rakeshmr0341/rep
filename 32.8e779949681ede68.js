"use strict";(self.webpackChunkatrio=self.webpackChunkatrio||[]).push([[32],{2032:(L,b,a)=>{a.d(b,{Jk:()=>y,Nt:()=>T,c:()=>R});var h=a(2495),d=a(2831),s=a(9212),I=a(6232),v=a(8645);const x=(0,d.i$)({passive:!0});let A=(()=>{class n{constructor(e,t){this._platform=e,this._ngZone=t,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return I.E;const t=(0,h.fI)(e),i=this._monitoredElements.get(t);if(i)return i.subject;const r=new v.x,o="cdk-text-field-autofilled",u=l=>{"cdk-text-field-autofill-start"!==l.animationName||t.classList.contains(o)?"cdk-text-field-autofill-end"===l.animationName&&t.classList.contains(o)&&(t.classList.remove(o),this._ngZone.run(()=>r.next({target:l.target,isAutofilled:!1}))):(t.classList.add(o),this._ngZone.run(()=>r.next({target:l.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",u,x),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:r,unlisten:()=>{t.removeEventListener("animationstart",u,x)}}),r}stopMonitoring(e){const t=(0,h.fI)(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static#e=this.\u0275fac=function(t){return new(t||n)(s.LFG(d.t4),s.LFG(s.R0b))};static#t=this.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),M=(()=>{class n{static#e=this.\u0275fac=function(t){return new(t||n)};static#t=this.\u0275mod=s.oAB({type:n});static#i=this.\u0275inj=s.cJS({})}return n})();var m=a(6223),f=a(3680),_=a(4170);const y=new s.OlP("MAT_INPUT_VALUE_ACCESSOR"),w=["button","checkbox","file","hidden","image","radio","range","reset","submit"];let H=0,T=(()=>{class n{get disabled(){return this._disabled}set disabled(e){this._disabled=(0,h.Ig)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required??this.ngControl?.control?.hasValidator(m.kI.required)??!1}set required(e){this._required=(0,h.Ig)(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&(0,d.qK)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=(0,h.Ig)(e)}get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(e,t,i,r,o,u,l,S,F,E){this._elementRef=e,this._platform=t,this.ngControl=i,this._autofillMonitor=S,this._formField=E,this._uid="mat-input-"+H++,this.focused=!1,this.stateChanges=new v.x,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(g=>(0,d.qK)().has(g)),this._iOSKeyupListener=g=>{const c=g.target;!c.value&&0===c.selectionStart&&0===c.selectionEnd&&(c.setSelectionRange(1,1),c.setSelectionRange(0,0))};const p=this._elementRef.nativeElement,C=p.nodeName.toLowerCase();this._inputValueAccessor=l||p,this._previousNativeValue=this.value,this.id=this.id,t.IOS&&F.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",this._iOSKeyupListener)}),this._errorStateTracker=new f.ZT(u,i,o,r,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===C,this._isTextarea="textarea"===C,this._isInFormField=!!E,this._isNativeSelect&&(this.controlType=p.multiple?"mat-native-select-multiple":"mat-native-select")}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._platform.IOS&&this._elementRef.nativeElement.removeEventListener("keyup",this._iOSKeyupListener)}ngDoCheck(){this.ngControl&&(this.updateErrorState(),null!==this.ngControl.disabled&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){e!==this.focused&&(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckNativeValue(){const e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){const e=this._getPlaceholder();if(e!==this._previousPlaceholder){const t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){w.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){const e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}static#e=this.\u0275fac=function(t){return new(t||n)(s.Y36(s.SBq),s.Y36(d.t4),s.Y36(m.a5,10),s.Y36(m.F,8),s.Y36(m.sg,8),s.Y36(f.rD),s.Y36(y,10),s.Y36(A),s.Y36(s.R0b),s.Y36(_.G_,8))};static#t=this.\u0275dir=s.lG2({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:18,hostBindings:function(t,i){1&t&&s.NdJ("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),2&t&&(s.Ikx("id",i.id)("disabled",i.disabled)("required",i.required),s.uIk("name",i.name||null)("readonly",i.readonly&&!i._isNativeSelect||null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),s.ekj("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[s.lbL.None,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly"},exportAs:["matInput"],standalone:!0,features:[s._Bn([{provide:_.Eo,useExisting:n}]),s.TTD]})}return n})(),R=(()=>{class n{static#e=this.\u0275fac=function(t){return new(t||n)};static#t=this.\u0275mod=s.oAB({type:n});static#i=this.\u0275inj=s.cJS({imports:[f.BQ,_.lN,_.lN,M,f.BQ]})}return n})()}}]);