<?php
$operate = $_REQUEST['operate'];
$pclass = $_REQUEST['pclass'];
if($pclass == 2) {
	$infos = array(
				array(
					'Name' => '旅行2',
					'KeywordTypeId' => 11,
					'ParentTypeId' => 0,
					'Keywords' => array(
						array('Name' => '宏村塔川', 'KeywordId' => 1),
						array('Name' => '黄南古道', 'KeywordId' => 2)
					)
				),
				array(
					'Name' => '户外2',
					'KeywordTypeId' => 12,
					'ParentTypeId' => 11,
					'Keywords' => array(
						array('Name' => '黄山日出', 'KeywordId' => 3),
						array('Name' => '徽杭古道', 'KeywordId' => 4)
					)
				),
				array(
					'Name' => '轮船2',
					'KeywordTypeId' => 13,
					'ParentTypeId' => 11,
					'Keywords' => array(
						array('Name' => '哈尔滨', 'KeywordId' => 5),
						array('Name' => '纪龙山', 'KeywordId' => 6)
					)
				),
				array(
					'Name' => '轮船3',
					'ParentTypeId' => 11,
					'KeywordTypeId' => 13,
					'Keywords' => null
				)
	);
}else {
	$infos = array(
				array(
					'Name' => '周边2',
					'KeywordTypeId' => 14,
					'ParentTypeId' => 0,
					'Keywords' => array(
						array('Name' => '婺源', 'KeywordId' => 7),
						array('Name' => '哈尔滨', 'KeywordId' => 8)
					)
				),
				array(
					'Name' => '长途2',
					'KeywordTypeId' => 15,
					'ParentTypeId' => 14,
					'Keywords' => array(
						array('Name' => '东极岛', 'KeywordId' => 9),
						array('Name' => '枸杞岛', 'KeywordId' => 10)
					)
				),
				array(
					'Name' => '境外2',
					'KeywordTypeId' => 16,
					'ParentTypeId' => 14,
					'Keywords' => array(
						array('Name' => '哈尼梯田', 'KeywordId' => 11),
						array('Name' => '海宁观潮', 'KeywordId' => 12)
					)
				),
				array(
					'Name' => '户外2',
					'KeywordTypeId' => 99,
					'ParentTypeId' => 14,
					'Keywords' => null
				)
	);
}

if($operate == 'getKeywords')
	echo json_encode(array(
		'DataList' => $infos,
		'Number' => 1,
		'Msg' => '操作成功！')
	);
else
	echo json_encode(array(
		'Number' => 1,
		'Msg' => '操作成功！')
	);