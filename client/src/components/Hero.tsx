import { useNavigate } from "react-router-dom";

const Hero = () => {

     const navigate = useNavigate();

     return (
          <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
               <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                         <div>
                              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to HoriZon</h1>
                              <p className="text-xl mb-8">A safe space for addiction recovery and support</p>
                              <button
                                   onClick={() => navigate("/signin")}
                                   className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
                              >
                                   Join Our Community
                              </button>
                         </div>
                         <div className="hidden md:block">
                              <img
                                   src="https://www.semrush.com/contentshake/_next/image/?url=https%3A%2F%2Fstatic.semrush.com%2Fgoodcontent%2Fuploads%2Fmedia%2FAD_4n_Xf_Ncn_Kz_Ji9_Snt_X_Fdwu_Vtvvn_Jgn_V5era_P5e_Nt_Z4dne3r_Dwg_Jf_R_Nc9_Q_Fwsfh_Ohw38mqrqx_UPN_Bd_RN_1i_HE_Jr_Sp_Z_Dfn_Hx3_Jo_A_Cf_N7460_JX_Sj6n_4l_PK_4i_EE_Qnz_G_Zy5zt_G6_Cb2_X_Ge_Rf4_Cxyo_Ueuqy_RW_00i_Gp_U7iy_22a2d10e66.jpeg&w=1920&q=75"
                                   alt="Supportive community"
                                   width={500}
                                   height={375}
                                   className="rounded-lg shadow-xl"
                              />
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Hero;

