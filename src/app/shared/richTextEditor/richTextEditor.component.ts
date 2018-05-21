import { Component, OnInit, Output,Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
declare var $: any;

@Component({
    selector: 'rich-text-editor',
    templateUrl: './richTextEditor.component.html',
    styleUrls: ['./richTextEditor.component.css']
})
export class RichTextEditorComponent implements OnInit {
    TermsofUseText: string;
    editMode: boolean;

    @Output() onEditEvent = new EventEmitter();
    @Output() onSaveEvent = new EventEmitter();
    @Output() onCancelEvent = new EventEmitter();
    @Output() onCreateNewEvent = new EventEmitter();
     @Input() terms:string;

    constructor() { }

    ngOnInit() {
        this.terms = 'Risk Intelligence Energy Losses Terms of Use. It is an application within the Risk Intelligence Central platform and is provided by Willis Towers Watson to its clients to whom it provides corporate risk and broking services (“CRB Services”)'
        this.editMode = false;
    }
    onEdit() {
        this.editMode = true;
        this.onSaveEvent.emit();
    }

    onSave(): void {
        this.editMode = false;
        this.onSaveEvent.emit("Terms of Use saved successfully");
    }
    onCancel() {
        this.editMode = false;
    }
    onCreateNew() {
        this.terms = '';
    }
    onPaste(e: any) {
        e.preventDefault();
        if ( e.clipboardData ) {
            this.TermsofUseText = (e.originalEvent || e).clipboardData.getData('text/plain') ;
            document.execCommand("insertText", false, this.TermsofUseText);
        }
        else if ( (window as any).clipboardData ) {
            this.TermsofUseText = (window as any).clipboardData.getData('Text');
            console.log("check" + this.TermsofUseText);
            if ((window as any).getSelection)
                (window as any).getSelection().getRangeAt(0).insertNode( document.createTextNode(this.TermsofUseText) );
        }
    }
    makeBold() {
        document.execCommand('bold', false, null);
    }

    makeItalics() {
        document.execCommand('italic', false, null);
    }

    makeUnderlined() {
        document.execCommand('underline', false, null);
    }

    makeLeft() {
        document.execCommand('justifyLeft', false, null);
    }

    makeCenter() {
        document.execCommand('justifyCenter', false, null);
    }

    makeRight() {
        document.execCommand('justifyRight', false, null);
    }
    insertUnorderedList() {
        document.execCommand('insertUnorderedList', false, null);
    }

    insertOrderedList() {
        document.execCommand('insertOrderedList', false, null);
    }

    makeSuperscript() {
        document.execCommand('superscript', false, null);
    }

    makeSubscript() {
        document.execCommand('subscript', false, null);
    }

    createLink() {
        var selected = document.getSelection();
        document.execCommand('createLink', false, 'http://' + selected);
    }

    removeLink() {
        document.execCommand('unlink', false, null);
    }

    generateHtmlCode() {
        HtmlElement2($("#editor"));

        function HtmlElement2(elem) {
            InsertHtml2($(elem).html());
        }

        function InsertHtml2(data) {
            var mywindow = window.open();
            mywindow.document.write('<html><head><title>Code</title>');
            mywindow.document.write('</head><body >');
            mywindow.document.write(data.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"));
            mywindow.document.write('</body></html>');
            mywindow.document.close(); // necessary for IE >= 10
            mywindow.focus(); // necessary for IE >= 10
            return true;
        }
    }


}
