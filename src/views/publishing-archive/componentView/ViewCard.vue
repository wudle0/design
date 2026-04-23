<template>
  <TopTitle
    title="카드, 카드 메타 타입 (반응형)"
    text="타이틀, 바디, 커버, 커스텀 푸터 slot 내에 UI 요소(툴팁, 버튼, 아이콘, divide-list, 디스크립션 등)들을 배치하여 사용 가능합니다. 
    title 슬롯의 title-group은 좌우의 아이템을 배치할 수 있는 공통 구조를 갖고 있으므로, vertical 정렬 필요 시 자식 요소로 삽입할 수 있도록 합니다. 
    extra 슬롯은 타이틀의 우측 영역에 위치하므로 버튼, 아이콘, 이 외 요소들이 적용될 수 있습니다.
    body 슬롯은 다양한 요소들이 조합될 수 있는 가능성이 있으므로, gap, align, justify 정의는 a-flex 옵션을 활용하여 구현하도록 합니다.
    카드는 반응형(%)을 기본으로 row/col 내부에 삽입하여 사용 가능하며, card-group 부모 컨테이너를 통해 묶음으로도 사용 가능합니다.
    
    중요 : 카드 컬럼 내부는 다양한 요소들이 조합될 수 있으며, 개수를 특정할 수 없기 때문에 정렬 및 카드 삽입은 row/col 을 사용하여 구현합니다.
    타이틀 슬롯의 item-desc, 바디 슬롯의 item-desc 는 공통으로 2줄 말줄임이 적용되어 있습니다.
    이 외 모든 요소는 1줄 말줄임을 기본으로 합니다."
  />
  <a-row :gutter="16">
    <a-col :span="8">
      <h2 class="typography-body-1">
        카드 타이틀 : 아이콘, 태그, divider-list (우측 정렬) / 바디 : 디스플레이
        텍스트
      </h2>
      <a-card size="small" :bordered="true">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>error</template>
              </Icon>
              <a-typography-title :level="3" class="item-title">
                <BasicEllipsisText
                  text="Card Title Placeholder Ellipsis Test Card Title Placeholder Ellipsis Test Card Title Placeholder Ellipsis Test "
                />
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="green small">
                  <p class="tag-wrap-text">TAG</p>
                </a-tag>
              </div>
            </div>
          </div>
        </template>
        <template #extra>
          <ul class="divider-list">
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </template>
        <a-flex justify="space-between" :gap="4">
          <a-typography-text class="typography-display-1">
            <BasicEllipsisText text="Display Text Ellipsis Test Display Text" />
          </a-typography-text>
        </a-flex>
      </a-card>
    </a-col>
    <a-col :span="8">
      <h2 class="typography-body-1">
        카드 타이틀 : 아이콘, 태그, divider-list (하단 정렬) / 바디 : 디스플레이
        텍스트
      </h2>
      <a-card size="small" :bordered="true">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>error</template>
              </Icon>
              <a-typography-title :level="3" class="item-title">
                <BasicEllipsisText text="Card Title Placeholder" />
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="green small">
                  <p class="tag-wrap-text">TAG</p>
                </a-tag>
              </div>
            </div>
          </div>
          <ul class="divider-list">
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </template>
        <a-flex justify="space-between" :gap="4">
          <a-typography-text class="typography-display-1">
            <BasicEllipsisText text="Display Text" />
          </a-typography-text>
        </a-flex>
      </a-card>
    </a-col>
    <a-col :span="8">
      <h2 class="typography-body-1">
        카드 타이틀 : 아이콘, 태그, divider-list (하단 정렬) / 바디 : 디스플레이
        텍스트
      </h2>
      <a-card size="small" :bordered="true">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>error</template>
              </Icon>
              <a-typography-title :level="3" class="item-title">
                <BasicEllipsisText text="Card Title Placeholder" />
              </a-typography-title>
            </div>
          </div>
          <ul class="divider-list">
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </template>
        <template #extra>
          <div class="tag-wrap">
            <a-tag class="green small">
              <p class="tag-wrap-text">TAG</p>
            </a-tag>
          </div>
        </template>
        <a-flex justify="space-between" :gap="4">
          <a-typography-text class="typography-display-1">
            <BasicEllipsisText text="Display Text" />
          </a-typography-text>
        </a-flex>
      </a-card>
    </a-col>
    <a-col :span="6">
      <h2 class="typography-body-1">
        카드 타이틀 : 아이콘, 태그 / 바디 : 디스플레이 텍스트, 디스크립션,
        divider-list
      </h2>
      <a-card size="small" :bordered="true">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>error</template>
              </Icon>
              <a-typography-title :level="3" class="item-title">
                <BasicEllipsisText text="Card Title Placeholder" />
              </a-typography-title>
            </div>
          </div>
        </template>
        <template #extra>
          <a-button class="link"> link link </a-button>
        </template>
        <a-flex vertical :gap="4">
          <a-typography-text class="typography-display-1">
            <BasicEllipsisText text="Display Text" />
          </a-typography-text>
          <a-typography-text class="item-desc">
            <BasicEllipsisText
              :lineClamp="2"
              text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
            />
          </a-typography-text>
          <ul class="divider-list">
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </a-flex>
      </a-card>
    </a-col>
    <a-col :span="6">
      <h2 class="typography-body-1">
        카드 타이틀 : 아이콘 / 바디 : 디스크립션, divider-list
      </h2>
      <a-card size="small" :bordered="true">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>error</template>
              </Icon>
              <a-typography-title :level="3" class="item-title">
                <BasicEllipsisText text="Card Title Placeholder" />
              </a-typography-title>
            </div>
          </div>
        </template>
        <a-flex justify="space-between" :gap="4">
          <a-typography-text class="item-desc">
            <BasicEllipsisText
              :lineClamp="2"
              text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
            />
          </a-typography-text>
          <ul class="divider-list">
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </a-flex>
      </a-card>
    </a-col>
    <a-col :span="6">
      <h2 class="typography-body-1">
        카드 타이틀 : 아이콘, 버튼, divider-list(하단 정렬) / 바디 : 디스크립션,
        divider-list(하단 정렬)
      </h2>
      <a-card size="small" :bordered="true">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>error</template>
              </Icon>
              <a-typography-title :level="3" class="item-title">
                <BasicEllipsisText text="Card Title Placeholder" />
              </a-typography-title>
            </div>
          </div>
          <ul class="divider-list">
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </template>
        <template #extra>
          <a-button class="primary small"> primary </a-button>
          <a-button class="secondary small"> primary </a-button>
        </template>
        <a-flex vertical :gap="4">
          <a-typography-text class="item-desc">
            <BasicEllipsisText
              :lineClamp="2"
              text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
            />
          </a-typography-text>
          <ul class="divider-list">
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </a-flex>
      </a-card>
    </a-col>
    <a-col :span="6">
      <h2 class="typography-body-1">
        카드 타이틀 : 이미지, 섭타이틀, 버튼, divider-list(하단 정렬) / 바디 :
        디스크립션, divider-list(하단 정렬)
      </h2>
      <a-card size="small" :bordered="true">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <img src="@/styles/assets/images/icon/icon_argoCD.svg" />

              <a-flex vertical gap="4">
                <a-typography-title :level="3" class="item-title">
                  <BasicEllipsisText text="Card Title Placeholder" />
                </a-typography-title>
                <a-typography-text
                  class="typography-label-5 ant-typography-subtle"
                >
                  { description }
                </a-typography-text>
              </a-flex>
            </div>
          </div>
        </template>
        <template #extra>
          <a-button class="link small"> link </a-button>
        </template>
        <a-flex vertical :gap="4">
          <a-typography-text class="item-desc">
            <BasicEllipsisText
              :lineClamp="2"
              text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
            />
          </a-typography-text>
          <ul class="divider-list">
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </a-flex>
      </a-card>
    </a-col>
    <a-col :span="8">
      <h2 class="typography-body-1">
        (스몰)카드 타이틀 : 아이콘 / 엑스트라 : 셀렉트 / 바디 : 텍스트
      </h2>
      <a-card size="small" :bordered="true">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>error</template>
              </Icon>
              <a-typography-title :level="3" class="item-title">
                <BasicEllipsisText text="Card Title Placeholder" />
              </a-typography-title>
              <a-tooltip overlayClassName="plain">
                <template #title> help ghost 버튼 툴팁 </template>
                <a-button class="auto">
                  <Icon size="md" color="default">
                    <template #name>help</template>
                  </Icon>
                </a-button>
              </a-tooltip>
            </div>
          </div>
        </template>
        <template #extra>
          <a-form>
            <a-form-item :rules="[{ required: false }]">
              <a-select
                v-model:value="formState.selected"
                placeholder="Select 선택 Placeholder"
                size="small"
              >
                <a-select-option value="a">Select 01</a-select-option>
                <a-select-option value="b">Select 02</a-select-option>
              </a-select>
            </a-form-item>
          </a-form>
        </template>
        <a-flex justify="space-between" :gap="4">
          <a-flex :gap="4">
            <p>Text Placeholder</p>
            <div class="tag-wrap">
              <a-tag class="green small">
                <p class="tag-wrap-text">TAG</p>
              </a-tag>
            </div>
          </a-flex>
        </a-flex>
      </a-card>
    </a-col>
    <a-col :span="8">
      <h2 class="typography-body-1">
        카드 커버 / 카드 메타 : 타이틀, 아바타 / 바디 : 텍스트, 푸터그룹
      </h2>
      <a-card :bordered="true">
        <template #cover>
          <div style="height: 100px; background-color: #f1f1f1"></div>
          <!-- <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      /> -->
        </template>
        <a-card-meta>
          <template #title>
            <div class="title-group">
              <div class="group-items">
                <Icon color="default" size="md" fill>
                  <template #name>error</template>
                </Icon>
                <a-typography-title :level="3" class="item-title">
                  <BasicEllipsisText text="Card Title" />
                </a-typography-title>
                <a-tooltip overlayClassName="plain">
                  <template #title> help ghost 버튼 툴팁 </template>
                  <a-button class="auto">
                    <Icon size="md" color="default">
                      <template #name>help</template>
                    </Icon>
                  </a-button>
                </a-tooltip>
              </div>
            </div>
          </template>
          <template #avatar>
            <a-avatar src="https://joeschmoe.io/api/v1/random" />
          </template>
        </a-card-meta>
        <a-flex :gap="4" vertical>
          <a-typography-text class="item-desc">
            <BasicEllipsisText
              :lineClamp="2"
              text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
            />
          </a-typography-text>
          <ul class="divider-list">
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </a-flex>
        <div class="footer-group">
          <div class="group-items">
            <a-tooltip overlayClassName="plain">
              <template #title> 버튼 툴팁 </template>
              <a-button class="auto">
                <Icon size="md" color="default">
                  <template #name>draw</template>
                </Icon>
              </a-button>
            </a-tooltip>
            <a-tooltip overlayClassName="plain">
              <template #title> 버튼 툴팁 </template>
              <a-button class="auto">
                <Icon size="md" color="default">
                  <template #name>draft</template>
                </Icon>
              </a-button>
            </a-tooltip>
            <a-tooltip overlayClassName="plain">
              <template #title> 버튼 툴팁 </template>
              <a-button class="auto">
                <Icon size="md" color="default">
                  <template #name>article</template>
                </Icon>
              </a-button>
            </a-tooltip>
          </div>
          <div class="group-items items-end">
            <a-button class="ghost">action</a-button>
            <a-button class="secondary">action</a-button>
            <a-button class="primary">Button</a-button>
          </div>
        </div>
      </a-card>
    </a-col>
    <a-col :span="8">
      <h2 class="typography-body-1">
        카드 커버 / 카드 메타 : 타이틀, 아바타 / 바디 : 텍스트, 푸터그룹
      </h2>
      <a-card :bordered="true">
        <template #title> <BasicEllipsisText text="Card Title" /></template>
        <template #cover>
          <div style="height: 100px; background-color: #f1f1f1"></div>
        </template>
        <a-card-meta>
          <template #title>
            <div class="title-group">
              <div class="group-items">
                <Icon color="default" size="md" fill>
                  <template #name>error</template>
                </Icon>
                <a-typography-title :level="3" class="item-title">
                  <BasicEllipsisText text="Card Title Placeholder" />
                </a-typography-title>
                <a-tooltip overlayClassName="plain">
                  <template #title> help ghost 버튼 툴팁 </template>
                  <a-button class="auto">
                    <Icon size="md" color="default">
                      <template #name>help</template>
                    </Icon>
                  </a-button>
                </a-tooltip>
              </div>
            </div>
          </template>
          <template #avatar>
            <a-avatar src="https://joeschmoe.io/api/v1/random" />
          </template>
        </a-card-meta>
        <a-flex :gap="4" vertical>
          <a-typography-text class="item-desc">
            <BasicEllipsisText
              :lineClamp="2"
              text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
            />
          </a-typography-text>
          <ul class="divider-list">
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </a-flex>
        <div class="footer-group">
          <div class="group-items">
            <a-tooltip overlayClassName="plain">
              <template #title>버튼 툴팁 </template>
              <a-button class="auto">
                <Icon size="md" color="default">
                  <template #name>draw</template>
                </Icon>
              </a-button>
            </a-tooltip>
            <a-tooltip overlayClassName="plain">
              <template #title>버튼 툴팁 </template>
              <a-button class="auto">
                <Icon size="md" color="default">
                  <template #name>draft</template>
                </Icon>
              </a-button>
            </a-tooltip>
            <a-tooltip overlayClassName="plain">
              <template #title>버튼 툴팁 </template>
              <a-button class="auto">
                <Icon size="md" color="default">
                  <template #name>article</template>
                </Icon>
              </a-button>
            </a-tooltip>
          </div>
          <div class="group-items items-end">
            <a-button class="ghost">action</a-button>
            <a-button class="secondary">action</a-button>
            <a-button class="primary">Button</a-button>
          </div>
        </div>
      </a-card>
    </a-col>
    <a-col :span="24">
      <h2 class="typography-body-1">
        (스몰,컬럼) 레이아웃은 동일하나 구조는 다름(의미에 따라 분리 필요)
        <br />
        - a-flex를 활용한 상단 title(space-between), body(space-between) 정렬
      </h2>
      <a-row :gutter="[16, 16]">
        <a-col :span="6">
          <a-card size="small" :bordered="true">
            <template #title>
              <div class="title-group">
                <div class="group-items">
                  <Icon color="default" size="md" fill>
                    <template #name>error</template>
                  </Icon>
                  <a-typography-title :level="3" class="item-title">
                    <BasicEllipsisText text="Card Title Placeholder" />
                  </a-typography-title>
                  <a-tooltip overlayClassName="plain">
                    <template #title> help ghost 버튼 툴팁 </template>
                    <a-button class="auto">
                      <Icon size="md" color="default">
                        <template #name>help</template>
                      </Icon>
                    </a-button>
                  </a-tooltip>
                </div>
              </div>
            </template>
            <template #extra>
              <a-flex class="extra-group" vertical>
                <div class="group-items">
                  <div class="tag-wrap">
                    <a-tag class="green small">
                      <p class="tag-wrap-text">TAG</p>
                    </a-tag>
                  </div>
                  <a-typography-text class="typography-body-2">
                    Text Placeholder
                  </a-typography-text>
                </div>
                <ul class="divider-list">
                  <li>Placeholder</li>
                  <li>Placeholder</li>
                </ul>
              </a-flex>
            </template>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card size="small" :bordered="true" class="">
            <template #title>
              <div class="title-group">
                <div class="group-items">
                  <Icon color="default" size="md" fill>
                    <template #name>error</template>
                  </Icon>
                  <a-typography-title :level="3" class="item-title">
                    <BasicEllipsisText text="Card Title Placeholder" />
                  </a-typography-title>
                  <div class="tag-wrap">
                    <a-tag class="green small">
                      <p class="tag-wrap-text">TAG</p>
                    </a-tag>
                  </div>
                </div>
              </div>
            </template>
            <template #extra>
              <a-button class="link"> link </a-button>
            </template>
            <a-flex justify="space-between" :gap="4">
              <a-flex vertical :gap="4">
                <a-typography-text class="typography-display-1">
                  <BasicEllipsisText text="Display Text" />
                </a-typography-text>
                <ul class="divider-list">
                  <li>Placeholder</li>
                  <li>Placeholder</li>
                </ul>
              </a-flex>
              <a-flex vertical :gap="4">
                <a-typography-text class="typography-display-1">
                  <BasicEllipsisText text="Display Text" />
                </a-typography-text>
                <ul class="divider-list">
                  <li>Placeholder</li>
                  <li>Placeholder</li>
                </ul>
              </a-flex>
            </a-flex>
          </a-card>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
  <a-row :gutter="16">
    <a-col :span="8">
      <h2 class="typography-body-1">
        카드 커버 / 카드 메타 : 타이틀, 아바타 / 바디 : 텍스트, 푸터그룹
      </h2>
      <a-card :bordered="true">
        <template #cover>
          <div style="height: 100px; background-color: #f1f1f1"></div>
          <!-- <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      /> -->
        </template>
        <a-card-meta>
          <template #title>
            <div class="title-group">
              <div class="group-items">
                <Icon color="default" size="md" fill>
                  <template #name>error</template>
                </Icon>
                <a-typography-title :level="3" class="item-title">
                  <BasicEllipsisText text="Card Title Placeholder" />
                </a-typography-title>
                <a-tooltip overlayClassName="plain">
                  <template #title>
                    <span class="ant-tooltip-text">help ghost 버튼 툴팁</span>
                  </template>
                  <a-button class="auto">
                    <Icon size="md" color="default">
                      <template #name>help</template>
                    </Icon>
                  </a-button>
                </a-tooltip>
              </div>
            </div>
          </template>
          <template #avatar>
            <a-avatar src="https://joeschmoe.io/api/v1/random" />
          </template>
        </a-card-meta>
        <a-flex :gap="4" vertical>
          <a-typography-text class="item-desc">
            <BasicEllipsisText
              :lineClamp="2"
              text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
            />
          </a-typography-text>
          <ul class="divider-list">
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </a-flex>
        <div class="footer-group">
          <div class="group-items">
            <a-tooltip overlayClassName="plain">
              <template #title>
                <span class="ant-tooltip-text">버튼 툴팁</span>
              </template>
              <a-button class="auto">
                <Icon size="md" color="default">
                  <template #name>settings</template>
                </Icon>
              </a-button>
            </a-tooltip>
            <a-tooltip overlayClassName="plain">
              <template #title>
                <span class="ant-tooltip-text">버튼 툴팁</span>
              </template>
              <a-button class="auto">
                <Icon size="md" color="default">
                  <template #name>edit</template>
                </Icon>
              </a-button>
            </a-tooltip>
            <a-tooltip overlayClassName="plain">
              <template #title>
                <span class="ant-tooltip-text">버튼 툴팁</span>
              </template>
              <a-button class="auto">
                <Icon size="md" color="default">
                  <template #name>delete</template>
                </Icon>
              </a-button>
            </a-tooltip>
          </div>
          <div class="group-items items-end">
            <a-button class="ghost">action</a-button>
            <a-button class="secondary">action</a-button>
            <a-button class="primary">Button</a-button>
          </div>
        </div>
      </a-card>
    </a-col>
    <a-col :span="8">
      <h2 class="typography-body-1">
        타이틀, 카드 커버 / 카드 메타 : 타이틀, 아바타 / 바디 : 텍스트, 푸터그룹
      </h2>
      <a-card :bordered="true">
        <template #title>
          <!-- <span class="ant-tooltip-text">Card Title</span> -->
          <a-flex vertical :gap="4">
            <div class="title-group">
              <div class="group-items">
                <Icon color="default" size="md" fill>
                  <template #name>error</template>
                </Icon>
                <a-typography-title :level="3" class="item-title">
                  <BasicEllipsisText text="Card Title Placeholder" />
                </a-typography-title>
                <div class="tag-wrap">
                  <a-tag class="green small">
                    <p class="tag-wrap-text">TAG</p>
                  </a-tag>
                </div>
              </div>
            </div>
            <a-typography-text class="item-desc">
              <BasicEllipsisText
                :lineClamp="2"
                text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
              />
            </a-typography-text>
          </a-flex>
        </template>
        <template #cover>
          <div style="height: 100px; background-color: #f1f1f1"></div>
        </template>
        <a-card-meta>
          <template #title>
            <div class="title-group">
              <div class="group-items">
                <Icon color="default" size="md" fill>
                  <template #name>error</template>
                </Icon>
                <a-typography-title :level="3" class="item-title">
                  <BasicEllipsisText text="Card Title Placeholder" />
                </a-typography-title>
                <a-tooltip overlayClassName="plain">
                  <template #title>
                    <span class="ant-tooltip-text">help ghost 버튼 툴팁</span>
                  </template>
                  <a-button class="auto">
                    <Icon size="md" color="default">
                      <template #name>help</template>
                    </Icon>
                  </a-button>
                </a-tooltip>
              </div>
            </div>
          </template>
          <template #avatar>
            <a-avatar src="https://joeschmoe.io/api/v1/random" />
          </template>
        </a-card-meta>
        <a-flex :gap="4" vertical>
          <a-typography-text class="item-desc">
            <BasicEllipsisText
              :lineClamp="2"
              text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
            />
          </a-typography-text>
          <ul class="divider-list">
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </a-flex>
        <div class="footer-group">
          <div class="group-items">
            <a-tooltip overlayClassName="plain">
              <template #title>
                <span class="ant-tooltip-text">버튼 툴팁</span>
              </template>
              <a-button class="auto">
                <Icon size="md" color="default">
                  <template #name>settings</template>
                </Icon>
              </a-button>
            </a-tooltip>
            <a-tooltip overlayClassName="plain">
              <template #title>
                <span class="ant-tooltip-text">버튼 툴팁</span>
              </template>
              <a-button class="auto">
                <Icon size="md" color="default">
                  <template #name>edit</template>
                </Icon>
              </a-button>
            </a-tooltip>
            <a-tooltip overlayClassName="plain">
              <template #title>
                <span class="ant-tooltip-text">버튼 툴팁</span>
              </template>
              <a-button class="auto">
                <Icon size="md" color="default">
                  <template #name>delete</template>
                </Icon>
              </a-button>
            </a-tooltip>
          </div>
          <div class="group-items items-end">
            <a-button class="ghost">action</a-button>
            <a-button class="secondary">action</a-button>
            <a-button class="primary">Button</a-button>
          </div>
        </div>
      </a-card>
    </a-col>
    <a-col :span="8">
      <h2 class="typography-body-1">
        타이틀, 카드 커버 / 카드 메타 : 타이틀, 엑스트라 / 바디 : 텍스트,
        푸터그룹
      </h2>
      <a-card :bordered="true">
        <template #title>
          <!-- <span class="ant-tooltip-text">Card Title</span> -->
          <a-flex vertical :gap="4">
            <div class="title-group">
              <div class="group-items">
                <Icon color="default" size="md" fill>
                  <template #name>error</template>
                </Icon>
                <a-typography-title :level="3" class="item-title">
                  <BasicEllipsisText text="Card Title Placeholder" />
                </a-typography-title>
              </div>
            </div>
          </a-flex>
        </template>
        <template #extra>
          <div class="tag-wrap">
            <a-tag class="error small">
              <p class="tag-wrap-text">value description</p>
            </a-tag>
          </div>
        </template>
        <template #cover>
          <div style="height: 100px; background-color: #f1f1f1"></div>
        </template>
        <a-card-meta>
          <template #title>
            <div class="title-group">
              <div class="group-items">
                <Icon color="default" size="md" fill>
                  <template #name>error</template>
                </Icon>
                <a-typography-title :level="3" class="item-title">
                  <BasicEllipsisText text="Card Title Placeholder" />
                </a-typography-title>
                <a-tooltip overlayClassName="plain">
                  <template #title>
                    <span class="ant-tooltip-text">help ghost 버튼 툴팁</span>
                  </template>
                  <a-button class="auto">
                    <Icon size="md" color="default">
                      <template #name>help</template>
                    </Icon>
                  </a-button>
                </a-tooltip>
              </div>
            </div>
          </template>
        </a-card-meta>
        <a-flex :gap="4" vertical>
          <a-typography-text class="item-desc">
            <BasicEllipsisText
              :lineClamp="2"
              text="Ubuntu is a Debian-based Linux apple operating system that runs from the desktop to the cloud, to all your internet connected things."
            />
          </a-typography-text>
          <ul class="divider-list">
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </a-flex>
        <div class="footer-group">
          <div class="group-items">
            <a-tooltip overlayClassName="plain">
              <template #title
                ><span class="ant-tooltip-text">버튼 툴팁</span>
              </template>
              <a-button class="auto">
                <Icon size="md" color="default">
                  <template #name>settings</template>
                </Icon>
              </a-button>
            </a-tooltip>
            <a-tooltip overlayClassName="plain">
              <template #title
                ><span class="ant-tooltip-text">버튼 툴팁</span>
              </template>
              <a-button class="auto">
                <Icon size="md" color="default">
                  <template #name>edit</template>
                </Icon>
              </a-button>
            </a-tooltip>
            <a-tooltip overlayClassName="plain">
              <template #title
                ><span class="ant-tooltip-text">버튼 툴팁</span>
              </template>
              <a-button class="auto">
                <Icon size="md" color="default">
                  <template #name>delete</template>
                </Icon>
              </a-button>
            </a-tooltip>
          </div>
          <div class="group-items items-end">
            <a-button class="ghost">action</a-button>
            <a-button class="secondary">action</a-button>
            <a-button class="primary">Button</a-button>
          </div>
        </div>
      </a-card>
    </a-col>
  </a-row>
  <TopTitle
    title="카드 타입 그룹형 (3컬럼, 정렬 : 중앙)"
    text="align-center(정렬 클래스)는 card-group 요소에 추가"
    style="margin-top: 20px"
  />
  <a-flex class="card-group align-center">
    <a-row>
      <a-col :span="8">
        <a-card size="small" :bordered="false">
          <template #title>
            <div class="title-group">
              <div class="group-items">
                <Icon color="default" size="md" fill>
                  <template #name>error</template>
                </Icon>
                <a-typography-title :level="3" class="item-title">
                  <BasicEllipsisText text="Card Title Placeholder" />
                </a-typography-title>
              </div>
            </div>
          </template>
          <a-flex :gap="4" vertical>
            <a-typography-text class="typography-display-1">
              <BasicEllipsisText text="13" />
            </a-typography-text>
          </a-flex>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card size="small" :bordered="false">
          <template #title>
            <div class="title-group">
              <div class="group-items">
                <Icon color="default" size="md" fill>
                  <template #name>error</template>
                </Icon>
                <a-typography-title :level="3" class="item-title">
                  <BasicEllipsisText text="Card Title Placeholder" />
                </a-typography-title>
              </div>
            </div>
          </template>
          <a-flex :gap="4" vertical>
            <a-typography-text class="typography-display-1">
              <BasicEllipsisText text="13" />
            </a-typography-text>
          </a-flex>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card size="small" :bordered="false">
          <template #title>
            <div class="title-group">
              <div class="group-items">
                <Icon color="default" size="md" fill>
                  <template #name>error</template>
                </Icon>
                <a-typography-title :level="3" class="item-title">
                  <BasicEllipsisText text="Card Title Placeholder" />
                </a-typography-title>
              </div>
            </div>
          </template>
          <a-flex :gap="4" vertical>
            <a-typography-text class="typography-display-1">
              <BasicEllipsisText text="13" />
            </a-typography-text>
          </a-flex>
        </a-card>
      </a-col>
    </a-row>
  </a-flex>
  <Toptitle
    title="카드 타입 그룹형 (4컬럼, 기본 정렬 : 좌측)"
    text="우측 요소 삽입 시 a-card의 extra 슬롯에 삽입합니다."
    style="margin-top: 20px"
  />
  <a-flex class="card-group">
    <a-row>
      <a-col :span="6">
        <a-card size="small" :bordered="false">
          <template #title>
            <div class="title-group">
              <div class="group-items">
                <Icon color="default" size="md" fill>
                  <template #name>error</template>
                </Icon>
                <a-typography-title :level="3" class="item-title">
                  <BasicEllipsisText text="Card Title Placeholder" />
                </a-typography-title>
                <div class="tag-wrap">
                  <a-tag class="green small">
                    <p class="tag-wrap-text">TAG</p>
                  </a-tag>
                </div>
              </div>
            </div>
          </template>
          <template #extra>
            <ul class="divider-list">
              <li>Placeholder</li>
              <li>Placeholder</li>
            </ul>
          </template>
          <a-flex :gap="4" vertical>
            <a-typography-text class="typography-display-1">
              <BasicEllipsisText text="Display Text" />
            </a-typography-text>
          </a-flex>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card size="small" :bordered="false">
          <template #title>
            <div class="title-group">
              <div class="group-items">
                <Icon color="default" size="md" fill>
                  <template #name>error</template>
                </Icon>
                <a-typography-title :level="3" class="item-title">
                  <BasicEllipsisText text="Card Title Placeholder" />
                </a-typography-title>
                <div class="tag-wrap">
                  <a-tag class="green small">
                    <p class="tag-wrap-text">TAG</p>
                  </a-tag>
                </div>
              </div>
            </div>
          </template>
          <template #extra>
            <ul class="divider-list">
              <li>Placeholder</li>
              <li>Placeholder</li>
            </ul>
          </template>
          <a-flex :gap="4" vertical>
            <a-typography-text class="typography-display-1">
              <BasicEllipsisText text="Display Text" />
            </a-typography-text>
          </a-flex>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card size="small" :bordered="false">
          <template #title>
            <div class="title-group">
              <div class="group-items">
                <Icon color="default" size="md" fill>
                  <template #name>error</template>
                </Icon>
                <a-typography-title :level="3" class="item-title">
                  <BasicEllipsisText text="Card Title Placeholder" />
                </a-typography-title>
                <div class="tag-wrap">
                  <a-tag class="green small">
                    <p class="tag-wrap-text">TAG</p>
                  </a-tag>
                </div>
              </div>
            </div>
          </template>
          <template #extra>
            <ul class="divider-list">
              <li>Placeholder</li>
              <li>Placeholder</li>
            </ul>
          </template>
          <a-flex :gap="4" vertical>
            <a-typography-text class="typography-display-1">
              <BasicEllipsisText text="Display Text" />
            </a-typography-text>
          </a-flex>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card size="small" :bordered="false">
          <template #title>
            <div class="title-group">
              <div class="group-items">
                <Icon color="default" size="md" fill>
                  <template #name>error</template>
                </Icon>
                <a-typography-title :level="3" class="item-title">
                  <BasicEllipsisText text="Card Title Placeholder" />
                </a-typography-title>
                <div class="tag-wrap">
                  <a-tag class="green small">
                    <p class="tag-wrap-text">TAG</p>
                  </a-tag>
                </div>
              </div>
            </div>
          </template>
          <template #extra>
            <ul class="divider-list">
              <li>Placeholder</li>
              <li>Placeholder</li>
            </ul>
          </template>
          <a-flex :gap="4" vertical>
            <a-typography-text class="typography-display-1">
              <BasicEllipsisText text="Display Text" />
            </a-typography-text>
          </a-flex>
        </a-card>
      </a-col>
    </a-row>
  </a-flex>
  <TopTitle
    title="카드 타입 그룹형 (horizon, 2컬럼 2개 묶음, 정렬 : 중앙)"
    text="title-group 내부의 요소는 space-between 으로, 하단(vertical) 정렬 시 title-group과 별개로 title 슬롯의 바로 자식 요소로 삽입합니다."
    style="margin-top: 20px"
  />
  <a-row class="card-group align-center">
    <a-col :span="8">
      <a-card size="small" :bordered="false">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>error</template>
              </Icon>
              <a-typography-title :level="3" class="item-title">
                <BasicEllipsisText text="Card Title Placeholder" />
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="green small">
                  <p class="tag-wrap-text">TAG</p>
                </a-tag>
              </div>
            </div>
          </div>
          <ul class="divider-list">
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </template>
        <a-flex :gap="4" vertical>
          <a-typography-text class="typography-display-1">
            <BasicEllipsisText text="Display Text" />
          </a-typography-text>
        </a-flex>
      </a-card>
      <a-card size="small" :bordered="false">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>error</template>
              </Icon>
              <a-typography-title :level="3" class="item-title">
                <BasicEllipsisText text="Card Title Placeholder" />
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="green small">
                  <p class="tag-wrap-text">TAG</p>
                </a-tag>
              </div>
            </div>
          </div>
          <ul class="divider-list">
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </template>
        <a-flex :gap="4" vertical>
          <a-typography-text class="typography-display-1">
            <BasicEllipsisText text="Display Text" />
          </a-typography-text>
        </a-flex>
      </a-card>
    </a-col>
    <a-col :span="8">
      <a-card size="small" :bordered="false">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>error</template>
              </Icon>
              <a-typography-title :level="3" class="item-title">
                <BasicEllipsisText text="Card Title Placeholder" />
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="green small">
                  <p class="tag-wrap-text">TAG</p>
                </a-tag>
              </div>
            </div>
          </div>
          <ul class="divider-list">
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </template>
        <a-flex :gap="4" vertical>
          <a-typography-text class="typography-display-1">
            <BasicEllipsisText text="Display Text" />
          </a-typography-text>
        </a-flex>
      </a-card>
      <a-card size="small" :bordered="false">
        <template #title>
          <div class="title-group">
            <div class="group-items">
              <Icon color="default" size="md" fill>
                <template #name>error</template>
              </Icon>
              <a-typography-title :level="3" class="item-title">
                <BasicEllipsisText text="Card Title Placeholder" />
              </a-typography-title>
              <div class="tag-wrap">
                <a-tag class="green small">
                  <p class="tag-wrap-text">TAG</p>
                </a-tag>
              </div>
            </div>
          </div>
          <ul class="divider-list">
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </template>
        <a-flex :gap="4" vertical>
          <a-typography-text class="typography-display-1">
            <BasicEllipsisText text="Display Text" />
          </a-typography-text>
        </a-flex>
      </a-card>
    </a-col>
  </a-row>
  <TopTitle
    title="카드 타입 그룹형 (1행, 기본 정렬 : 좌측)"
    text="행 전체를 사용할 경우 row 내부의 a-col 의 span 옵션을 활용하여 영역을 지정해 줍니다.
    카드의 타이틀에 사용되는 버튼은 small 사이즈를 사용하도록 합니다.
    "
    style="margin-top: 20px"
  />
  <a-flex class="card-group" vertical>
    <a-row>
      <a-col :span="6">
        <a-card size="small" :bordered="false">
          <template #title>
            <div class="title-group">
              <div class="group-items">
                <Icon color="default" size="md" fill>
                  <template #name>error</template>
                </Icon>
                <a-typography-title :level="3" class="item-title">
                  <BasicEllipsisText text="Card Title Placeholder" />
                </a-typography-title>
                <div class="tag-wrap">
                  <a-tag class="green small">
                    <p class="tag-wrap-text">TAG</p>
                  </a-tag>
                </div>
              </div>
            </div>
          </template>
          <template #extra>
            <a-button class="primary small"> primary </a-button>
          </template>
          <div>
            <a-typography-text class="typography-display-1">
              <BasicEllipsisText text="Display Text" />
            </a-typography-text>
          </div>
        </a-card>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="6">
        <a-card size="small" :bordered="false">
          <template #title>
            <div class="title-group">
              <div class="group-items">
                <Icon color="default" size="md" fill>
                  <template #name>error</template>
                </Icon>
                <a-typography-title :level="3" class="item-title">
                  <BasicEllipsisText text="Card Title Placeholder" />
                </a-typography-title>
                <div class="tag-wrap">
                  <a-tag class="green small">
                    <p class="tag-wrap-text">TAG</p>
                  </a-tag>
                </div>
              </div>
            </div>
          </template>
          <template #extra>
            <a-button class="primary small"> primary </a-button>
          </template>
          <div>
            <a-typography-text class="typography-display-1">
              <BasicEllipsisText text="Display Text" />
            </a-typography-text>
          </div>
        </a-card>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="6">
        <a-card size="small" :bordered="false">
          <template #title>
            <div class="title-group">
              <div class="group-items">
                <Icon color="default" size="md" fill>
                  <template #name>error</template>
                </Icon>
                <a-typography-title :level="3" class="item-title">
                  <BasicEllipsisText text="Card Title Placeholder" />
                </a-typography-title>
                <div class="tag-wrap">
                  <a-tag class="green small">
                    <p class="tag-wrap-text">TAG</p>
                  </a-tag>
                </div>
              </div>
            </div>
          </template>
          <template #extra>
            <a-button class="primary small"> primary </a-button>
          </template>
          <div>
            <a-typography-text class="typography-display-1">
              <BasicEllipsisText text="Display Text" />
            </a-typography-text>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </a-flex>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { Icon } from '@/components/icons';
import { TopTitle } from '@/components/layouts';
import { BasicEllipsisText } from '@/components/layouts';

const formState = reactive({
  name: '',
  nameError: '',
  selected: null,
  multiple: [],
  multipleMaxTagCount: [],
  number: null,
  numberError: null,
  password: '',
  textarea: '',
});
</script>
<style scoped>
h2 {
  display: block;
  margin: 20px 0 10px !important;
}
</style>
