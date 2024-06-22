const translation = {
  common: {
    editing: '편집 중',
    autoSaved: '자동 저장됨',
    unpublished: '미발행',
    published: '발행됨',
    publish: '발행',
    update: '업데이트',
    run: '실행',
    running: '실행 중',
    inRunMode: '실행 모드',
    inPreview: '미리보기 중',
    inPreviewMode: '미리보기 모드',
    preview: '미리보기',
    viewRunHistory: '실행 기록 보기',
    runHistory: '실행 기록',
    goBackToEdit: '편집기로 돌아가기',
    conversationLog: '대화 로그',
    features: '기능',
    debugAndPreview: '디버그 및 미리보기',
    restart: '재시작',
    currentDraft: '현재 초안',
    currentDraftUnpublished: '현재 초안 미발행',
    latestPublished: '최신 발행본',
    publishedAt: '발행일',
    restore: '복원',
    runApp: '앱 실행',
    batchRunApp: '앱 일괄 실행',
    accessAPIReference: 'API 참조 접근',
    embedIntoSite: '사이트에 삽입',
    addTitle: '제목 추가...',
    addDescription: '설명 추가...',
    noVar: '변수 없음',
    searchVar: '변수 검색',
    variableNamePlaceholder: '변수 이름',
    setVarValuePlaceholder: '변수 값 설정',
    needConnecttip: '이 단계는 아무것도 연결되어 있지 않습니다',
    maxTreeDepth: '분기당 최대 {{depth}} 노드 제한',
    needEndNode: '종료 블록을 추가해야 합니다',
    needAnswerNode: '답변 블록을 추가해야 합니다',
    workflowProcess: '워크플로우 과정',
    notRunning: '아직 실행되지 않음',
    previewPlaceholder: '디버깅을 시작하려면 아래 상자에 내용을 입력하세요',
    effectVarConfirm: {
      title: '변수 제거',
      content: '변수가 다른 노드에서 사용되고 있습니다. 그래도 제거하시겠습니까?',
    },
    insertVarTip: '빠르게 삽입하려면 \'/\' 키를 누르세요',
    processData: '데이터 처리',
    input: '입력',
    output: '출력',
    jinjaEditorPlaceholder: '변수를 삽입하려면 \'/\' 또는 \'{\'를 입력하세요',
    viewOnly: '보기 전용',
    showRunHistory: '실행 기록 보기',
    enableJinja: 'Jinja 템플릿 지원 활성화',
    learnMore: '더 알아보기',
    copy: '복사',
    duplicate: '복제',
    addBlock: '블록 추가',
    pasteHere: '여기에 붙여넣기',
    pointerMode: '포인터 모드',
    handMode: '핸드 모드',
    model: '모델',
    workflowAsTool: '도구로서의 워크플로우',
    configureRequired: '구성 필요',
    configure: '구성',
    manageInTools: '도구에서 관리',
    workflowAsToolTip: '워크플로우 업데이트 후 도구 재구성이 필요합니다.',
    viewDetailInTracingPanel: '세부 정보 보기',
  },
  errorMsg: {
    fieldRequired: '{{field}}가 필요합니다',
    authRequired: '인증이 필요합니다',
    invalidJson: '{{field}}는 잘못된 JSON입니다',
    fields: {
      variable: '변수 이름',
      variableValue: '변수 값',
      code: '코드',
      model: '모델',
      rerankModel: '재정렬 모델',
    },
    invalidVariable: '잘못된 변수',
  },
  singleRun: {
    testRun: '테스트 실행',
    startRun: '실행 시작',
    running: '실행 중',
    testRunIteration: '테스트 실행 반복',
    back: '뒤로',
    iteration: '반복',
  },
  tabs: {
    'searchBlock': '블록 검색',
    'blocks': '블록',
    'tools': '도구',
    'allTool': '전체',
    'builtInTool': '내장',
    'customTool': '사용자 정의',
    'workflowTool': '워크플로우',
    'question-understand': '질문 이해',
    'logic': '논리',
    'transform': '변환',
    'utilities': '유틸리티',
    'noResult': '일치하는 결과 없음',
  },
  blocks: {
    'start': '시작',
    'end': '끝',
    'answer': '답변',
    'llm': 'LLM',
    'knowledge-retrieval': '지식 검색',
    'question-classifier': '질문 분류기',
    'if-else': 'IF/ELSE',
    'code': '코드',
    'template-transform': '템플릿',
    'http-request': 'HTTP 요청',
    'variable-assigner': '변수 할당자',
    'variable-aggregator': '변수 집계자',
    'iteration-start': '반복 시작',
    'iteration': '반복',
    'parameter-extractor': '매개변수 추출기',
  },
  blocksAbout: {
    'start': '워크플로우를 시작하기 위한 초기 매개변수를 정의합니다',
    'end': '워크플로우의 종료 및 결과 유형을 정의합니다',
    'answer': '대화의 답변 내용을 정의합니다',
    'llm': '질문에 답하거나 자연어를 처리하기 위해 대형 언어 모델을 호출합니다',
    'knowledge-retrieval': '사용자 질문과 관련된 텍스트 콘텐츠를 지식 베이스에서 쿼리할 수 있습니다',
    'question-classifier': '사용자 질문의 분류 조건을 정의합니다. LLM은 분류 설명을 기반으로 대화의 진행 방식을 정의할 수 있습니다',
    'if-else': 'if/else 조건을 기반으로 워크플로우를 두 가지 분기로 나눌 수 있습니다',
    'code': '사용자 정의 논리를 구현하기 위해 Python 또는 NodeJS 코드를 실행합니다',
    'template-transform': 'Jinja 템플릿 구문을 사용하여 데이터를 문자열로 변환합니다',
    'http-request': 'HTTP 프로토콜을 통해 서버 요청을 보낼 수 있습니다',
    'variable-assigner': '다중 분기 변수들을 하나의 변수로 집계하여 다운스트림 노드의 통합 구성을 가능하게 합니다.',
    'variable-aggregator': '다중 분기 변수들을 하나의 변수로 집계하여 다운스트림 노드의 통합 구성을 가능하게 합니다.',
    'iteration': '목록 객체에서 여러 단계를 수행하여 모든 결과가 출력될 때까지 반복합니다.',
    'parameter-extractor': '도구 호출 또는 HTTP 요청을 위해 자연어에서 구조화된 매개변수를 추출하기 위해 LLM을 사용합니다.',
  },
  operator: {
    zoomIn: '확대',
    zoomOut: '축소',
    zoomTo50: '50%로 확대',
    zoomTo100: '100%로 확대',
    zoomToFit: '화면에 맞게 확대',
  },
  panel: {
    userInputField: '사용자 입력 필드',
    changeBlock: '블록 변경',
    helpLink: '도움말 링크',
    about: '정보',
    createdBy: '작성자 ',
    nextStep: '다음 단계',
    addNextStep: '이 워크플로우의 다음 블록 추가',
    selectNextStep: '다음 블록 선택',
    runThisStep: '이 단계 실행',
    checklist: '체크리스트',
    checklistTip: '게시하기 전에 모든 문제가 해결되었는지 확인하세요',
    checklistResolved: '모든 문제가 해결되었습니다',
    organizeBlocks: '블록 정리',
    change: '변경',
  },
  nodes: {
    common: {
      outputVars: '출력 변수',
      insertVarTip: '변수 삽입',
      memory: {
        memory: '메모리',
        memoryTip: '대화 메모리 설정',
        windowSize: '창 크기',
        conversationRoleName: '대화 역할 이름',
        user: '사용자 접두사',
        assistant: '어시스턴트 접두사',
      },
      memories: {
        title: '메모리',
        tip: '대화 메모리',
        builtIn: '내장',
      },
    },
    start: {
      required: '필수',
      inputField: '입력 필드',
      builtInVar: '내장 변수',
      outputVars: {
        query: '사용자 입력',
        memories: {
          des: '대화 기록',
          type: '메시지 유형',
          content: '메시지 내용',
        },
        files: '파일 목록',
      },
      noVarTip: '워크플로우에서 사용할 입력을 설정하세요',
    },
    end: {
      outputs: '출력',
      output: {
        type: '출력 유형',
        variable: '출력 변수',
      },
      type: {
        'none': '없음',
        'plain-text': '일반 텍스트',
        'structured': '구조화된',
      },
    },
    answer: {
      answer: '답변',
      outputVars: '출력 변수',
    },
    llm: {
      model: '모델',
      variables: '변수',
      context: '컨텍스트',
      contextTooltip: '컨텍스트로 지식을 가져올 수 있습니다',
      notSetContextInPromptTip: '컨텍스트 기능을 활성화하려면 PROMPT에 컨텍스트 변수를 입력하세요.',
      prompt: '프롬프트',
      roleDescription: {
        system: '대화를 위한 고급 지침 제공',
        user: '모델에 지침, 질문 또는 텍스트 기반 입력 제공',
        assistant: '사용자 메시지에 기반한 모델의 응답',
      },
      addMessage: '메시지 추가',
      vision: '비전',
      files: '파일',
      resolution: {
        name: '해상도',
        high: '높음',
        low: '낮음',
      },
      outputVars: {
        output: '생성된 내용',
        usage: '모델 사용 정보',
      },
      singleRun: {
        variable: '변수',
      },
      sysQueryInUser: '사용자 메시지에 sys.query가 필요합니다',
    },
    knowledgeRetrieval: {
      queryVariable: '쿼리 변수',
      knowledge: '지식',
      outputVars: {
        output: '복구된 세그먼트 데이터',
        content: '세그먼트 내용',
        title: '세그먼트 제목',
        icon: '세그먼트 아이콘',
        url: '세그먼트 URL',
        metadata: '기타 메타데이터',
      },
    },
    http: {
      inputVars: '입력 변수',
      api: 'API',
      apiPlaceholder: 'URL을 입력하세요, 변수를 삽입하려면 ‘/’를 입력하세요',
      notStartWithHttp: 'API는 http:// 또는 https://로 시작해야 합니다',
      key: '키',
      value: '값',
      bulkEdit: '일괄 편집',
      keyValueEdit: '키-값 편집',
      headers: '헤더',
      params: '매개변수',
      body: '본문',
      outputVars: {
        body: '응답 내용',
        statusCode: '응답 상태 코드',
        headers: '응답 헤더 목록 JSON',
        files: '파일 목록',
      },
      authorization: {
        'authorization': '권한 부여',
        'authorizationType': '권한 부여 유형',
        'no-auth': '없음',
        'api-key': 'API 키',
        'auth-type': '인증 유형',
        'basic': '기본',
        'bearer': 'Bearer',
        'custom': '사용자 정의',
        'api-key-title': 'API 키',
        'header': '헤더',
      },
      insertVarPlaceholder: '변수를 삽입하려면 \'/\'를 입력하세요',
      timeout: {
        title: '시간 초과',
        connectLabel: '연결 시간 초과',
        connectPlaceholder: '초 단위로 연결 시간 초과 입력',
        readLabel: '읽기 시간 초과',
        readPlaceholder: '초 단위로 읽기 시간 초과 입력',
        writeLabel: '쓰기 시간 초과',
        writePlaceholder: '초 단위로 쓰기 시간 초과 입력',
      },
    },
    code: {
      inputVars: '입력 변수',
      outputVars: '출력 변수',
      advancedDependencies: '고급 종속성',
      advancedDependenciesTip: '더 많은 시간이 소요되거나 기본으로 내장되지 않은 일부 미리 로드된 종속성을 여기에 추가하세요',
      searchDependencies: '종속성 검색',
    },
    templateTransform: {
      inputVars: '입력 변수',
      code: '코드',
      codeSupportTip: 'Jinja2만 지원합니다',
      outputVars: {
        output: '변환된 내용',
      },
    },
    ifElse: {
      if: 'If',
      else: 'Else',
      elseDescription: 'If 조건이 충족되지 않을 때 실행할 논리를 정의하는 데 사용됩니다.',
      and: '그리고',
      or: '또는',
      operator: '연산자',
      notSetVariable: '먼저 변수를 설정하세요',
      comparisonOperator: {
        'contains': '포함',
        'not contains': '포함하지 않음',
        'start with': '시작',
        'end with': '끝',
        'is': '이다',
        'is not': '아니다',
        'empty': '비어 있음',
        'not empty': '비어 있지 않음',
        'null': 'null임',
        'not null': 'null이 아님',
      },
      enterValue: '값 입력',
      addCondition: '조건 추가',
      conditionNotSetup: '조건이 설정되지 않음',
    },
    variableAssigner: {
      title: '변수 할당',
      outputType: '출력 유형',
      varNotSet: '변수가 설정되지 않음',
      noVarTip: '할당할 변수를 추가하세요',
      type: {
        string: '문자열',
        number: '숫자',
        object: '객체',
        array: '배열',
      },
      aggregationGroup: '집계 그룹',
      aggregationGroupTip: '이 기능을 활성화하면 변수 집계자가 여러 변수 집합을 집계할 수 있습니다.',
      addGroup: '그룹 추가',
      outputVars: {
        varDescribe: '{{groupName}} 출력',
      },
      setAssignVariable: '할당 변수 설정',
    },
    tool: {
      toAuthorize: '승인하기',
      inputVars: '입력 변수',
      outputVars: {
        text: '도구가 생성한 내용',
        files: {
          title: '도구가 생성한 파일',
          type: '지원 유형. 현재는 이미지만 지원합니다',
          transfer_method: '전송 방법. 값은 remote_url 또는 local_file',
          url: '이미지 URL',
          upload_file_id: '업로드된 파일 ID',
        },
      },
    },
    questionClassifiers: {
      model: '모델',
      inputVars: '입력 변수',
      outputVars: {
        className: '클래스 이름',
      },
      class: '클래스',
      classNamePlaceholder: '클래스 이름을 작성하세요',
      advancedSetting: '고급 설정',
      topicName: '주제 이름',
      topicPlaceholder: '주제 이름을 작성하세요',
      addClass: '클래스 추가',
      instruction: '지시',
      instructionTip: '질문 분류기가 질문을 더 잘 분류할 수 있도록 추가 지시를 입력하세요.',
      instructionPlaceholder: '지시를 작성하세요',
    },
    parameterExtractor: {
      inputVar: '입력 변수',
      extractParameters: '매개변수 추출',
      importFromTool: '도구에서 가져오기',
      addExtractParameter: '추출 매개변수 추가',
      addExtractParameterContent: {
        name: '이름',
        namePlaceholder: '추출 매개변수 이름',
        type: '유형',
        typePlaceholder: '추출 매개변수 유형',
        description: '설명',
        descriptionPlaceholder: '추출 매개변수 설명',
        required: '필수',
        requiredContent: '필수는 모델 추론을 위한 참고 용도로만 사용되며, 매개변수 출력의 필수 유효성 검사는 아닙니다.',
      },
      extractParametersNotSet: '추출 매개변수가 설정되지 않음',
      instruction: '지시',
      instructionTip: '매개변수 추출기가 매개변수를 추출하는 방법을 이해하는 데 도움이 되는 추가 지시를 입력하세요.',
      advancedSetting: '고급 설정',
      reasoningMode: '추론 모드',
      reasoningModeTip: '모델의 함수 호출 또는 프롬프트에 대한 지시 응답 능력을 기반으로 적절한 추론 모드를 선택할 수 있습니다.',
      isSuccess: '성공 여부. 성공 시 값은 1이고, 실패 시 값은 0입니다.',
      errorReason: '오류 원인',
    },
    iteration: {
      deleteTitle: '반복 노드를 삭제하시겠습니까?',
      deleteDesc: '반복 노드를 삭제하면 모든 하위 노드가 삭제됩니다',
      input: '입력',
      output: '출력 변수',
      iteration_one: '{{count}} 반복',
      iteration_other: '{{count}} 반복',
      currentIteration: '현재 반복',
    },
  },
  tracing: {
    stopBy: '{{user}}에 의해 중지됨',
  },
}

export default translation
