var BSApp = BSApp || {};
BSApp.config = {
	kanban: {
      "name": "Kanban Board",
      "numberOfColumns": 4,
      "columns": [
	  {"name": "Data Fields", "cards": [
          {"title": "Household Size", "source":"Data Fields", "details":"Text","details1":""},
          {"title": "Immigration Status","source":"Data Fields","details":"Dropdown","details1":""},
		  {"title": "Income from a job","source":"Data Fields","details":"Text","details1":""},
		  {"title": "Other income","source":"Data Fields","details":"Text","details1":""}
        ]},
        {"name": "Operators", "cards": [
          {"title": "==","source":"Operators","details":"","details1":""},
          {"title": "!=","source":"Operators","details":"","details1":""},
          {"title": "<","source":"Operators","details":"","details1":""},
          {"title": ">","source":"Operators","details":"","details1":""},
          {"title": "<=","source":"Operators","details":"","details1":""},
          {"title": ">=","source":"Operators","details":"","details1":""}
        ]},
		{"name": "Drop Below", "cards": [
		]}
      ]
    }
}