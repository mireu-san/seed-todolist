# 빈티지풍 할일
- 본 프로젝트는 react 에 typescript 양식을 적용해서 구현 한 웹 어플리케이션입니다. 리엑트 상태 관리 (state management) 를 최대한 활용해서 구현 해 보며 구동 원리를 깊게 이해하는 것에 초점을 두었습니다. 유저측에서 클릭 시, 지정한 값대로 반응을 보이는 효과를 넣었습니다.

- 입력 칸에서 특정 내용을 추가함으로서 생성이 시작됩니다. 모든 구성이  렌더링 되는 중심은 App.tsx 입니다.
- 특정 DOM(생성된 할일, 인스턴스)의 HTML 내 독립적인 생성 구현을 위해 useRef 가 사용되었습니다.
- InputField, App, SingleTodo 가 주된 파일 구성입니다.
- 이 외, TodoList 는 typescript 내 type 설정을 위함입니다.

# 설치 방법:
해당 폴더 경로에서 npm install 을 입력하시면 됩니다.

# 사용자로서 다음의 것을 할 수 있습니다.
- 작업 목록 읽기
- 마우스나 키보드로 작업 추가하기
- 마우스나 키보드를 사용하여 작업 삭제하기
- 마우스나 키보드를 사용하여 작업 편집하기

# 우회적으로 구현 된 항목입니다.
- 작업을 특정한 집합으로 나누어 보기: 전체 작업, 진행 중인 작업, 혹은 완료된 작업들.

# 향후 개선 점(이상적 목표):
- https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components/todo-list-unique-todos.png
- 마우스 클릭으로는 수정 버튼이 confirm 되지 않는 문제점. (line 80, SingleTodo.tsx)
- 완료 처리 된 항목은 하단의 별개 grid 생성을 통해 이동되도록 하는 것.

# 디버깅을 위한 시작점:
- https://developer.mozilla.org/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning
- https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering
//////////////////////////////////////////////////////////////

Tech note:
- npm i react-beautiful-dnd & npm i @types/react-beautiful-dnd
- (this will allow drag and drop feature, just like how survey website does)

Personal note:
Remember, wrap it up. See how the logics flow.
Be sure to (1)drag and (2)drop, design two actions specially.

# Almost found where to knock, but no idea how:
- useState will surely let 'handleDone' to also change that icon.
icon for done is from react-icon.
- To let it change, it may be necessary to just create another useState variable.
- Maybe coding a new useState 'in' the present useState is wrong idea.