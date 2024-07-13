import Promotheus from "../../assets/images/icons/promotheus.svg";
import Loki from "../../assets/images/icons/loki.svg";
import Bitbucket from "../../assets/images/icons/bitbucket.svg";
import Gitlab from "../../assets/images/icons/gitlab.svg";
import Kotlin from "../../assets/images/icons/kotlin-small.svg";
import Java from "../../assets/images/icons/java.svg";
import Android from "../../assets/images/icons/android-small.svg";
import Azure from "../../assets/images/icons/azure.svg";
import GCP from "../../assets/images/icons/gcp.svg";
import Digit from "../../assets/images/icons/digitoc.svg";
import AWS from "../../assets/images/icons/aws.svg";
import Kubernetes from "../../assets/images/icons/kubernetes.svg";
import ELK from "../../assets/images/icons/elk.svg";
import Grafana from "../../assets/images/icons/grafana.svg";
import Terraform from "../../assets/images/icons/terraform.svg";
import IOS from "../../assets/images/icons/ios-small.svg";
import Swift from "../../assets/images/icons/swift-small.svg";
import Flutter from "../../assets/images/icons/flutter-small.svg";
import NextJS from "../../assets/images/icons/next-js.svg";
import ReactJS from "../../assets/images/icons/react-js.svg";
import Javascript from "../../assets/images/icons/js.svg";
import Balsamic from "../../assets/images/icons/balsamic.svg";
import Invision from "../../assets/images/icons/invision.svg";
import Figma from "../../assets/images/icons/figma-small.svg";
import Docker from "../../assets/images/icons/docker.svg";
import PostgreSQL from "../../assets/images/icons/postgre-sql.svg";
import Python from "../../assets/images/icons/python.svg";
import NodeJS from "../../assets/images/icons/node-js.svg";
import PHP from "../../assets/images/icons/php.svg";
import GO from "../../assets/images/icons/go.svg";
import AntDesign from "../../assets/images/icons/ant.svg";
import GatsbyJS from "../../assets/images/icons/gatsby.png";
import VueJS from "../../assets/images/icons/vue.svg";
import Principle from "../../assets/images/icons/principle.svg";
import Sketch from "../../assets/images/icons/sketch-small.svg";
import Adobe from "../../assets/images/icons/adobe.svg";
import YouTrack from "../../assets/images/icons/you-track.svg";
import Appium from "../../assets/images/icons/appium.svg";
import Cypress from "../../assets/images/icons/cypress.svg";
import Jmeter from "../../assets/images/icons/jmeter.svg";
import MongoDB from "../../assets/images/icons/mongodb.svg";
import Cassandra from "../../assets/images/icons/cassandra.svg";
import Sass from "../../assets/images/icons/sass.svg";
import MaterialUI from "../../assets/images/icons/material-ui.svg";
import Zeplin from "../../assets/images/icons/zeplin.svg";
import Illustrator from "../../assets/images/icons/ai-small.svg";
import Lottie from "../../assets/images/icons/lottie-small.svg";
import Photoshop from "../../assets/images/icons/photoshop.svg";

const colors = {
  devops: "#a8bfff",
  mobile: "#dbe5ff",
  infrostructure: "#d1dde8",
  frontend: "#c6d6ff",
  ui_ux: "#ced6ee",
  backend: "#bddaed",
  testing: "#e1e9fe",
};

export const programsArr = [
  {
    name: "Promotheus",
    icon: Promotheus,
    color: colors?.devops,
    id: "Devops",
  },
  { name: "Loki", icon: Loki, color: colors?.devops, id: "Devops" },
  {
    name: "Bitbucket",
    icon: Bitbucket,
    color: colors?.devops,
    id: "Devops",
  },
  { name: "Gitlab", icon: Gitlab, color: colors?.devops, id: "Devops" },
  { name: "Kotlin", icon: Kotlin, color: colors?.mobile, id: "Mobile" },
  { name: "Android", icon: Android, color: colors?.mobile, id: "Mobile" },
  { name: "Java", icon: Java, color: colors?.mobile, id: "Mobile" },
  {
    name: "Azure",
    icon: Azure,
    color: colors?.infrostructure,
    id: "Infrastructure",
  },
  {
    name: "GCP",
    icon: GCP,
    color: colors?.infrostructure,
    id: "Infrastructure",
  },
  {
    name: "DigitalOcean",
    icon: Digit,
    color: colors?.infrostructure,
    id: "Infrastructure",
  },
  {
    name: "AWS",
    icon: AWS,
    color: colors?.infrostructure,
    id: "Infrastructure",
  },
  {
    name: "Kubernetes",
    icon: Kubernetes,
    color: colors?.infrostructure,
    id: "Infrastructure",
  },
  { name: "ELK", icon: ELK, color: colors?.devops, id: "Devops" },
  { name: "Grafana", icon: Grafana, color: colors?.devops, id: "Devops" },
  {
    name: "Terraform",
    icon: Terraform,
    color: colors?.devops,
    id: "Devops",
  },
  { name: "IOS", icon: IOS, color: colors?.mobile, id: "Mobile" },
  { name: "Swift", icon: Swift, color: colors?.mobile, id: "Mobile" },
  { name: "Flutter", icon: Flutter, color: colors?.mobile, id: "Mobile" },
  {
    name: "Next.JS",
    icon: NextJS,
    color: colors?.frontend,
    id: "Frontend",
  },
  {
    name: "React.JS",
    icon: ReactJS,
    color: colors?.frontend,
    id: "Frontend",
  },
  {
    name: "Javascript",
    icon: Javascript,
    color: colors?.frontend,
    id: "Frontend",
  },
  { name: "Balsamic", icon: Balsamic, color: colors?.ui_ux, id: "UX/UI" },
  { name: "Invision", icon: Invision, color: colors?.ui_ux, id: "UX/UI" },
  { name: "Figma", icon: Figma, color: colors?.ui_ux, id: "UX/UI" },
  { name: "Docker", icon: Docker, color: colors?.devops, id: "Devops" },
  {
    name: "PostgreSQL",
    icon: PostgreSQL,
    color: colors?.backend,
    id: "Backend",
  },
  { name: "Python", icon: Python, color: colors?.backend, id: "Backend" },
  { name: "Node.JS", icon: NodeJS, color: colors?.backend, id: "Backend" },
  { name: "PHP", icon: PHP, color: colors?.backend, id: "Backend" },
  { name: "GO", icon: GO, color: colors?.backend, id: "Backend" },
  {
    name: "AntDesign",
    icon: AntDesign,
    color: colors?.frontend,
    id: "Frontend",
  },
  {
    name: "Gatsby.JS",
    icon: GatsbyJS,
    color: colors?.frontend,
    id: "Frontend",
  },
  { name: "Vue.JS", icon: VueJS, color: colors?.frontend, id: "Frontend" },
  { name: "Principle", icon: Principle, color: colors?.ui_ux, id: "UX/UI" },
  { name: "Sketch", icon: Sketch, color: colors?.ui_ux, id: "UX/UI" },
  { name: "Adobe suite", icon: Adobe, color: colors?.ui_ux, id: "UX/UI" },
  {
    name: "YouTrack",
    icon: YouTrack,
    color: colors?.testing,
    id: "Testing",
  },
  { name: "Appium", icon: Appium, color: colors?.testing, id: "Testing" },
  { name: "Cypress", icon: Cypress, color: colors?.testing, id: "Testing" },
  { name: "Jmeter", icon: Jmeter, color: colors?.testing, id: "Testing" },
  { name: "MongoDB", icon: MongoDB, color: colors?.backend, id: "Backend" },
  {
    name: "Cassandra",
    icon: Cassandra,
    color: colors?.backend,
    id: "Backend",
  },
  { name: "Sass", icon: Sass, color: colors?.frontend, id: "Frontend" },
  {
    name: "Material UI",
    icon: MaterialUI,
    color: colors?.frontend,
    id: "Frontend",
  },
  { name: "Zeplin", icon: Zeplin, color: colors?.ui_ux, id: "UX/UI" },
  {
    name: "Illustrator",
    icon: Illustrator,
    color: colors?.ui_ux,
    id: "UX/UI",
  },
  { name: "Lottie", icon: Lottie, color: colors?.ui_ux, id: "UX/UI" },
  { name: "Photoshop", icon: Photoshop, color: colors?.ui_ux, id: "UX/UI" },
];
