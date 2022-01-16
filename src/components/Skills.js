// import React from "react";
// import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import styled from "styled-components";
// import javascriptIcon from "../assets/javascript.svg";
// import styledIcon from "../assets/styled-components.svg";
// import reactIcon from "../assets/react.svg";
// import htmlIcon from "../assets/html.svg";
// import cssIcon from "../assets/css.svg";

// const Skills = () => {
//   const skills = [
//     { skill: "HTML5", icon: htmlIcon },
//     { skill: "CSS3", icon: cssIcon },
//     { skill: "JavaScript", icon: javascriptIcon },
//     { skill: "React", icon: reactIcon },
//     { skill: "Styled Components", icon: styledIcon },
//     { skill: "HTML5", icon: htmlIcon },
//     { skill: "CSS3", icon: cssIcon },
//     { skill: "JavaScript", icon: javascriptIcon },
//     { skill: "React", icon: reactIcon },
//     { skill: "Styled Components", icon: styledIcon },
//   ];
//   return (
//     <StyledSkills>
//       {/* {skills.map((item, i) => {
//         return (
//           <IconContainer skill={item.skill} key={i}>
//             <FontAwesomeIcon icon={item.icon} size="4x" color="#000" />
//           </IconContainer>
//         );
//       })} */}
//       {skills.map((item, i) => {
//         return (
//           <SkillContainer skill={item.skill} key={i}>
//             <img src={item.icon} alt="" height="50px" />
//             <p>{item.skill}</p>
//           </SkillContainer>
//         );
//       })}
//     </StyledSkills>
//   );
// };

// const StyledSkills = styled.div`
//   display: flex;
//   gap: 10px;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   padding: 1rem;
//   max-width: 400px;
//   margin: 0 auto;

//   @media (min-width: 930px) {
//     padding: 1rem;
//   }
// `;

// const SkillContainer = styled.div`
//   cursor: pointer;
//   position: relative;

//   p {
//     font-size: 0.8rem;
//   }

//   &::after {
//     content: "${({ skill }) => skill}";
//     color: #fff;
//     position: absolute;
//     top: -30px;
//     /* left: -17px; */
//     left: 50%;
//     transform: translateX(-50%);
//     font-size: 0.8rem;
//     padding: 0.5rem;
//     background-color: #000;
//     border-radius: 5px;
//     text-align: center;
//     width: fit-content;
//     visibility: hidden;
//   }

//   &:hover {
//     transform: translateY(-2px);

//     &::after {
//       visibility: visible;
//     }
//   }
// `;

// // const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
// //   cursor: pointer;
// //   transition: all ease-in 150ms;
// //   position: relative;

// //   &::after {
// //     content: "";
// //     color: #fff;
// //     position: absolute;
// //     top: 0;
// //     left: 0;
// //     width: 100%;
// //     height: 30%;
// //     padding: 1rem;
// //   }
// //   &:hover {
// //     transform: translateY(-2px);
// //   }
// // `;

// // const IconContainer = styled.span`
// //   display: inline-block;
// //   position: relative;
// //   transition: all ease-in 150ms;
// //   cursor: pointer;

// //   &::after {
// //     content: "${({ skill }) => skill}";
// //     color: #fff;
// //     position: absolute;
// //     top: -30px;
// //     /* left: -17px; */
// //     left: 50%;
// //     transform: translateX(-50%);
// //     font-size: 0.8rem;
// //     padding: 0.5rem;
// //     background-color: #000;
// //     border-radius: 5px;
// //     visibility: hidden;
// //   }

// //   &:hover {
// //     transform: translateY(-2px);
// //     &::after {
// //       visibility: visible;
// //     }
// //   }
// // `;
// export default Skills;
