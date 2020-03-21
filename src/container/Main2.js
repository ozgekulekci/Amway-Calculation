import React, { useState, useEffect } from 'react';
import "./Main2.css"


//bir de bu yöntem ile denedim fakat react ve redux ile beraber çalıştıramadım


export default function Main2() {

    // ilk verimiz
    var main_tree = [
        {
            "name": "You",
            "sub_id": null,
        }
    ];

    // bir düğüm silmek için
    function deleteNode(i) {
        console.log("silindi")
        return window.$('.node_' + i).html('');
    }

    // otomatik ilk sayfa yüklendiğinde düğümleri oluşturuyoruz.
    // gelen i değişkeni hangi düğüm olduğunu gösterir.
    function createNode(i, name = "") {
        return `
                <li class="ng-scope">
                <div>
                    <h5 class="ng-binding">
                        <span class="text-primary icon-user" aria-hidden="true"></span>
                        <input value="`+ name + `" class="ng-pristine ng-valid ng-not-empty ng-touched"><br>
                        <small>Self BV: </small>
                        <input type="number" onChange="calculate()" class="ng-pristine ng-valid ng-not-empty ng-touched"><br>
                        <small>Total: </small>0<br>
                    </h5>
                    <a href="#" title="Add a new downline" class="add-button" onClick="addNode(`+ i + `)"><span class="label label-success">+</span></a>
                    <a href="#" title="Delete this IBO and its downlines" class="pull-right" onClick="deleteNode(`+ i + `)"><span class="label label-default">x</span></a>
                </div>
                    <ul class="node_`+ i + `">

                    </ul>
                </li>`;
    }

    // tıklamalarda düğüm eklemek için add_i değişkeni nereye düğüm ekleyeceğimizi veriyor.
    function addNode(add_i) {
        // yeni düğümün hangi sırada olacağını belirliyorum. her zaman tüm düğümler+1
        let i = main_tree.length + 1;
        // yeni veriyi bizim veri setimize ekliyorum ve add_i nerenin alt düğümü olduğunu söylüyor.
        main_tree.push({ "name": "", "sub_id": add_i });
        let string = `
            <li class="ng-scope">
            <div>
                <h5 class="ng-binding">
                    <span class="text-primary icon-user" aria-hidden="true"></span>
                    <input value="" class="ng-pristine ng-valid ng-not-empty ng-touched"><br>
                    <small>Self BV: </small>
                    <input type="number" onChange="calculate()" class="ng-pristine ng-valid ng-not-empty ng-touched"><br>
                    <small>Total: </small>0<br>
                </h5>
                <a href="#" title="Yeni alt düğüm" class="add-button" onClick="addNode(`+ i + `)"><span class="label label-success">+</span></a>
                <a href="#" title="Alt düğümleri sil" class="pull-right" onClick="deleteNode(`+ i + `)"><span class="label label-default">x</span></a>
            </div>
                <ul class="node_`+ i + `">

                </ul>
            </li>`;

        // düğümü ilgili yere düğümlüyorum.
        return window.$('.node_' + add_i).append(string);
    }

    // düğüm oluşturma fonksiyonu
    function treeCreate() {
        main_tree.map((tree, i) => {
            if (i === 0) {
                window.$('#hesap-ul').append(createNode(i, tree.name));
            } else {
                window.$('.node_' + tree['sub_id']).append(createNode(i, tree.name));
            }
        });
    }


    useEffect(() => {

        return () => {
            treeCreate();

        }
    }, [])

    return (
        <React.Fragment>
            <div id="hesap-tree-container">
                <ul id="hesap-ul">

                </ul>
            </div>

        </React.Fragment>
    )
}
