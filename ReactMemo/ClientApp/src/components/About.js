import React, { Component } from 'react';
import { TechList } from './Shared/TechList/TechList';
import { SiteList } from './Shared/Site/SiteList';

export class About extends Component {
    render() {
        const title = "정보.";
        const message = "안녕하세요. ReactMemo 사이트 입니다.";

        return (
            <>
                <h2>{title}</h2>
                <h3>{message}</h3>

                <div className='row mb-5'>
                    <div className='col-md-6'>
                        <div className='thumbnail'>
                            <img src='https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg' className='img-fluid'></img>
                            <i>Photo by Google</i>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='thumbnail'>
                            <img src='https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg' className='img-fluid'></img>
                            <i>Photo by Google</i>
                        </div>
                    </div>
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