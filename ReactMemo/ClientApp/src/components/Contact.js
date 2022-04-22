import React, { Component } from"react";
import { ComponentDetails } from "./ComponentDetails/ComponentDetails";
import { TechList } from "./Shared/TechList/TechList";
import { SiteList } from "./Shared/Site/SiteList";

export class Contact extends Component {
    render() {
        const title = "연락처.";
        const message = "안녕하세요. ReactMemo 사이트 입니다.";

        return (
            <>
                <h2>{title}</h2>
                <h3>{message}</h3>

                <ComponentDetails />

                <div className="alert alert-warning alert-dismissable mb-5">
                    이 사이트 제작을 위한 모든 단계는
                    <strong>coals company</strong>에서 동영상 강좌로 제공됩니다.
                    관심 있으신 분들은 
                    <a href="https://github.com/HongChaeMin" className="alert-link">minHong github</a>를 
                    참조하시기 바랍니다.
                </div>

                <div className="row">
                <div className='col-md-6'>
                    <h3><i className='fa fa-wrench'></i>현재 사이트에서 사용된 기술 리스트</h3>
                    <TechList></TechList>
                </div>
                <div className='col-md-6'>
                    <h3><i className='fa fa-sitemap'></i>현재 사이트와 관련된 추천 사이트</h3>
                    <SiteList></SiteList>
                </div>
                </div>
            </>
        );
    }
}