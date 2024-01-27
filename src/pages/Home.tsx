import Header from "../components/header";
import Footer from "../components/footer";
import { useState } from "react";

import CM from '../data/cm.json';
import CD from '../data/cd.json';

export default function Index() {
  const URL = new URLSearchParams(location.search);

  const [cd, setCd] = useState<null | keyof (typeof CD)>(URL.get('cd') as keyof(typeof CD) ?? null);
  const [cm, setCm] = useState<null | keyof (typeof CM)>(URL.get('cm') as keyof(typeof CM) ?? null);

  const handleCd = (e: React.ChangeEvent) => setCd(((e.target as HTMLInputElement).value as keyof(typeof CD)));
  const handleCm = (e: React.ChangeEvent) => setCm(((e.target as HTMLInputElement).value as keyof(typeof CM)));

  return (
    <>
      <Header />

      <main>
        <div className='banner'>
          <div className='content'>
            <p className='title'>CMIC</p>
            <p className='subtitle'>Cmicoscope en ligne</p>
            <div className='flags'>
              <i className='fa-solid fa-radiation'/>
              <i className='fa-solid fa-biohazard'/>
              <i className='fa-solid fa-exclamation'/>
              <i className='fa-solid fa-skull-crossbones'/>
              <i className='fa-solid fa-x'/>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="infos">
            <p className={ cm && CM[cm] ? '' : 'disabled' }>
              <span className="title">
                Matière :
              </span>
              { cm ? CM[cm]?.designation ? '➜ ' + CM[cm].designation[0].toUpperCase() + CM[cm].designation.slice(1) : '/' : '/' }
            </p>

            <p className={ cd && cd.split('')[0] ? '' : 'disabled' }>
              <span className="title">
                Danger Primaire :
              </span>
              { cd && cd.split('')[0] ? '➜ ' + CD[(cd.split('')[0] as keyof(typeof CD))] : '/' }
            </p>
            
            <p className={ cd && cd.split('')[1] ? '' : 'disabled' }>
              <span className="title">
                Danger Secondaire :
              </span>
              { cd && cd.split('')[1] ? '➜ ' + CD[(cd.split('')[1] as keyof(typeof CD))] : '/' }
            </p>
            
            <p className={ cd && cd.split('')[2] ? '' : 'disabled' }>
              <span className="title">
                Danger Subsidiaire :
              </span>
              { cd && cd.split('')[2] ? '➜ ' + CD[(cd.split('')[2] as keyof(typeof CD))] : '/' }
            </p>

            <p className={ cd && cd.split('')[3] ? '' : 'disabled' }>
              <span className="title">
                Autre{ cd && cd.split('').length > 4 ? 's' : '' } Danger{ cd && cd.split('').length > 4 ? 's' : '' }
              </span>
              {
                cd && cd.split('')[3] ? 
                cd?.split('').slice(3).map((c) => {
                  const _c = c as keyof(typeof CD);

                  return (
                    <span key={ c }>{'➜ ' + CD[_c]} <br /></span>
                  )
                })
                : '/'
              }
            </p>
          </div>

          <div className="form">
            <input type="text" name="cd" id="cd" placeholder="Code Danger" onChange={ handleCd } defaultValue={ cd as keyof(typeof CD) }/>
            <input type="text" name="cm" id="cm" placeholder="Code Matière" onChange={ handleCm } defaultValue={ cm as keyof(typeof CM) }/>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
