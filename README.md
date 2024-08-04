# react-deploy

## 🚀 0단계 - 기본 코드 준비

### 기능 요구 사항

> 로그인 및 관심목록 코드를 옮겨 온다. 코드를 옮기는 방법에는 디렉터리의 모든 파일을 직접 복사하여 붙여 넣는 것부터 필요한 일부 파일만 이동하는 것, Git을 사용하는 것까지 여러 가지 방법이 있다. 코드 이동 시 반드시 **리소스 파일, 프로퍼티 파일, 테스트 코드** 등을 함께 이동한다.

## 🚀 1단계 - API 명세 협의 & 반영

### 기능 요구 사항

- 작성한 API 문서를 기반으로 팀 내에서 지금까지 만든 API를 검토하고 통일하여 변경 사항을 반영한다.

- [ ] 팀 내에서 일관된 기준을 정하여 API 명세를 결정한다.
- [ ] 때로는 클라이언트의 편의를 위해 API 명세를 결정하는 것이 좋다.
- [x] 팀 내에 배포 될 API가 여러개 일 경우 상단 네비게이션 바에서 선택 가능하게 한다.
  - [x] 프론트엔드의 경우 배포와 사용자가 팀 내 여러 서버 중 하나를 선택하여 서비스를 이용
  - [x] 팀내 백엔드 엔지니어의 이름을 넣고, 이름을 선택하면 해당 엔지니어의 API로 API통신을 하게 한다.
  - [x] 기본 선택은 제일 첫번째 이름으로 한다.
