initSidebarItems({"fn":[["field_with_name","Returns a new Field for a given value and custom name."],["from_labelled_generic","Given a labelled generic representation of a `Dst`, returns `Dst`"],["into_labelled_generic","Given a `Src`, returns its labelled generic representation."],["labelled_convert_from","Converts one type into another assuming they have the same labelled generic representation."],["sculpted_convert_from","Converts from one type into another assuming that their labelled generic representations can be sculpted into each other."],["transform_from","Converts from one type into another assuming that their labelled generic representations can be sculpted into each other."]],"mod":[["chars","Types for building type-level labels from character sequences."]],"struct":[["Field","A Label contains a type-level Name, a runtime value, and a reference to a `&'static str` name."],["ValueField","A version of Field that doesn't have a type-level label, just a value-level one"]],"trait":[["ByNameFieldPlucker","Trait for plucking out a `Field` from a type by type-level `TargetKey`."],["IntoUnlabelled","Trait for turning a Field HList into an un-labelled HList"],["IntoValueLabelled","A trait that strips type-level strings from the labels"],["LabelledGeneric","A trait that converts from a type to a labelled generic representation."],["Transmogrifier","Trait for transmogrifying a `Source` type into a `Target` type."]]});