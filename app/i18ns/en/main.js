const layout={
  saveConfig:'save configs',
  switchMenu:'switch menu：',
  checkedChildren:'H',
  unCheckedChildren:'V',
  fontSize:'font size：',
  sizeDesign:'size design',
  colorDesign:'color design',
  save_cfg_msg:'success save theme！',
  data_valid_msg:'please enter legal data！',
  data_px_msg:'please enter data within 500-5000！',
  data_percent_msg:'please enter data within 50-100！',
  menu_width_msg:'please enter data within 0-300！',
};
const projects={
  tableHeaderText:{
    name:'project name',
    description:'project description',
    role:'project role',
    target:'apis target',
    updatetime:'updatetime',
    updater:'updater',
    action:'actions',
  },
  actionsText:{
    router_action:'router setting',
    api_action:'apis manage',
    edit_action:'edit',
    delete_action:'delete',
    delete_confirm:'are you sure to delete？',
    delete_confirm_ok:'ok',
    delete_confirm_cancel:'cancel',
    add_action:'add',
    batch_action:'batch delete',
  },
  searchFormText:{
    name:'project name',
    name_placeholder:'please input',
    submit:'search',
  },
  addFormText:{
    name:'project name',
    name_placeholder:'please input',
    target:'apis target',
    target_placeholder:'apis target',
    role:'role',
    role_placeholder:'please select',
    description:'description',
    description_placeholder:'description',
    submit:'save',
    reset:'reset',
  },
};
const projectApis={
  tableHeaderText:{
    name:'api name',
    tags:'tags',
    url:'url',
    method:'method',
    type:'type',
    auth:'api auth',
    input:'input params',
    output:'output params',
    updatetime:'updatetime',
    updater:'updater',
    action:'action',
  },
  actionsText:{
    test_action:'test',
    edit_action:'edit',
    delete_action:'delete',
    delete_confirm:'are you sure to delete？',
    delete_confirm_ok:'ok',
    delete_confirm_cancel:'cancel',
    add_action:'add',
    batch_action:'batch delete',
  },
  searchFormText:{
    url:'url',
    url_placeholder:'please input',
    submit:'search',
    reset:'reset',
  },
  addFormText:{
    name:'api name',
    tags:'tags',
    url:'url',
    method:'method',
    type:'type',
    auth:'api auth',
    input:'input params',
    output:'output params',
    submit:'save',
    reset:'reset',
    test:'test',
  },
};
const projectRouter={
  pageText:{
    search_placeholder:'please input name',
    preview_text:'page preview_',
    design_text:'page design',
  },
  actionsText:{
    add_action:'add',
    edit_action:'edit',
    delete_action:'delete',
    delete_confirm:'are you sure to delete？',
    delete_confirm_ok:'ok',
    delete_confirm_cancel:'cancel',
  },
  addFormText:{
    parentId:'pparentId',
    path:'path',
    name:'name',
    componentPath:'componentPath',
    iconKey:'iconKey',
    hideMenu:'hideMenu',
    denied:'denied',
    add_title:'add',
    edit_title:'edit',
    ok_text:'ok',
    cancel_text:'cancel',
  },
};
const projectDesign={
  pageText:{
    page_title:'props setting',
  },
  actionsText:{
    add_action:'add',
    edit_action:'edit',
    delete_action:'delete',
    delete_confirm:'are you sure to delete？',
    delete_confirm_ok:'ok',
    delete_confirm_cancel:'cancel',
  },
  topActionText:{
    preview:'preview',
    saveConfigs:'save configs',
    redoDesign:'redo',
    undoDesign:'undo',
  },
  addFormText:{
    type:'component',
    add_title:'add',
    edit_title:'edit',
    ok_text:'ok',
    cancel_text:'cancel',
  },
  designConfigText:{
    actionI18n:{
      required_msg:'this item is required！',
      name:'event name',
      apiName:'api name',
      handlePath:'router change',
      btnText:'button text',
      isBatch:'batch actions',
      is_batch_no:'no',
      is_batch_yes:'yes',
      option:'action',
      edit_action:'edit',
      delete_action:'delete',
      delete_confirm:'are you sure to delete？',
      table_title:'add action',
    },
    columnI18n:{
      required_msg:'this item is required！',
      title:'title',
      dataIndex:'props name',
      align:'align',
      renderType:'renderType',
      renderProps:'renderProps',
      renderChildren:'renderChildren',
      tools:'tools',
      option:'action',
      edit_action:'edit',
      delete_action:'delete',
      delete_confirm:'are you sure to delete？',
      table_title:'add column',
    },
    editorI18n:{
      actions:'action configs',
      searchForm:'searchForm configs',
      columns:'columns configs',
      modalForm:'modalForm configs',
      required_msg:'this item is required！',
      name:'props name',
      value:'props value',
      option:'action',
      edit_action:'edit',
      delete_action:'delete',
      delete_confirm:'are you sure to delete？',
      table_title:'add props',
    },
  },
};
const users={
  tableHeaderText:{
    name:'user name',
    email:'email',
    active:'status',
    active_true:'actived',
    active_false:'not active',
    github:'bind GitHub',
    github_true:'bind',
    github_false:'not bind',
    projectName:'project',
    role:'role',
    updatetime:'updatetime',
    updater:'updater',
    action:'action',
  },
  actionsText:{
    auth_action:'set auth',
    edit_action:'edit',
    delete_action:'delete',
    delete_confirm:'are you sure to delete？',
    delete_confirm_ok:'ok',
    delete_confirm_cancel:'cancel',
    add_action:'add',
    batch_action:'batch delete',
  },
  searchFormText:{
    name:'user name',
    name_placeholder:'please input',
    role:'role',
    role_placeholder:'please select',
    submit:'search',
    reset:'reset',
  },
  addFormText:{
    name:'user name',
    email:'email',
    password:'password',
    role:'role',
    avatar:'avatar',
    projectId:'project name',
    submit:'save',
    reset:'reset',
  },
  authFormText:{
    root_name:'router auth setting',
    auth_msg:'please refresh the page to see if the current routing status is effective！',
    submit:'save',
    reset:'clean',
  },
  profilePageText:{
    profile:{
      title:'profile',
      name:'user name',
      email:'email',
      active:'status',
      active_true:'actived',
      active_false:'not active',
      projectName:'project name',
      role:'role',
    },
    upProfile:{
      title:'update profile',
      name:'user name',
      email:'email',
      password:'password',
      submit:'ok',
      reset:'clean',
    },
  },
};
const suspense={
  columns_title:'name',
  columns_email:'email',
  test1_title:'profile',
  test2_title:'userinfo',
  loadError:'loadError',
  errorBoundary:'errorBoundary',
  handleErrorBoundary:'handleErrorBoundary',
  handleError:'handleError',
};
const canvas={
  red_pen:'red pen',
  blue_pen:'blue pen',
  green_pen:'green pen',
  orange_pen:'orange pen',
  small_pen:'small',
  middle_pen:'middle',
  large_pen:'large',
  add_text:'add text',
  eraser:'eraser',
  undo:'undo',
  redo:'redo',
  clean_canvas:'clean canvas',
  save_canvas:'save canvas',
  replace_pic:'replace pic',
  clean_pic:'clean pic',
  up_image_msg:'please upload pictures！',
  up_image_size_msg:'picture size cannot exceed 8MB！',
};
const editor={
  undo:'undo',
  redo:'redo',
  h1:'h1',
  h2:'h2',
  ol:'ol',
  ul:'ul',
  bold:'bold',
  italic:'italic',
  underline:'underline',
  strikethrough:'strikethrough',
  fontSize:'fontSize',
  color:'color',
  background:'background',
  quote:'quote',
  dividing:'dividing',
  alignCenter:'alignCenter',
  alignLeft:'alignLeft',
  alignRight:'alignRight',
  indent:'indent',
  lineHeight:'lineHeight',
  spacing:'spacing',
  clear:'clear',
  brush:'brush',
  code:'code',
  table:'table',
  emoji:'emoji',
  latex:'latex',
  file:'file',
  flow:'flow',
  image:'image',
  video:'video',
  audio:'audio',
  link:'link',
  markdown:'markdown',
  import:'import',
};

const components={
  back:'back',
};

const main={
  bread:'current',
  copyright:'copyright &copy; 2020-2022',
  layout,
  projects,
  projectApis,
  projectRouter,
  projectDesign,
  users,
  suspense,
  canvas,
  editor,
  components,
};

export default main;

