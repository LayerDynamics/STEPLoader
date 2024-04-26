// /src/parseSTEP.ts
export interface StepData {
	vertices: number[][];
	edges: number[][];
	faces: number[][];
	curves: number[][];
	surfaces: number[][];
	points: number[][];
	lines: number[][];
	loops: number[][];
	planes: number[][];
	circles: number[][];
	compositeCurves: number[][];
	compositeSurfaces: number[][];
	cartesianPoints: number[][];
	directions: number[][];
	vectors: number[][];
	axis2Placement3D: number[][];
	cylindricalSurfaces: number[][];
	conicalSurfaces: number[][];
	sphericalSurfaces: number[][];
	toroidalSurfaces: number[][];
	curveBoundedSurfaces: number[][];
	rectangularTrimmedSurfaces: number[][];
	bSplineCurves: number[][];
	bSplineSurfaces: number[][];
	rationalBSplineCurves: number[][];
	rationalBSplineSurfaces: number[][];
	polylines: number[][];
	trimmedCurves: number[][];
	offsetCurves3D: number[][];
	offsetSurfaces: number[][];
	geometricallyBoundedSurfaces: number[][];
	geometricallyBoundedWireframeShapeRepresentations: number[][];
	shellBasedSurfaceModels: number[][];
	manifoldSolidBreps: number[][];
	facetedBreps: number[][];
	advancedBrepShapeRepresentations: number[][];
	constructiveSolidGeometry: number[][];
	boundaryRepresentations: number[][];
	advancedFaces: number[][];
	connectedFaceSets: number[][];
	topologicalRepresentationItems: number[][];
	geometricRepresentationItems: number[][];
	mappedItems: number[][];
	styledItems: number[][];
	presentationLayerAssignments: number[][];
	presentationStyleAssignments: number[][];
	colors: number[][];
	materials: number[][];
	measures: number[][];
	values: number[][];
	dateAndTimes: number[][];
	personAndOrganizations: number[][];
	approvals: number[][];
	documentReferences: number[][];
	products: number[][];
	productCategories: number[][];
	productDefinitions: number[][];
	productDefinitionShapes: number[][];
	shapeAspects: number[][];
	shapeRepresentations: number[][];
	assemblyStructures: number[][];
  }

  export function parseStepFile(stepFile: string): StepData {
	const lines = stepFile.split('\n');

	const vertices: number[][] = [];
	const edges: number[][] = [];
	const faces: number[][] = [];
	const curves: number[][] = [];
	const surfaces: number[][] = [];
	const points: number[][] = [];
	const lines: number[][] = [];
	const loops: number[][] = [];
	const planes: number[][] = [];
	const circles: number[][] = [];
	const compositeCurves: number[][] = [];
	const compositeSurfaces: number[][] = [];
	const cartesianPoints: number[][] = [];
	const directions: number[][] = [];
	const vectors: number[][] = [];
	const axis2Placement3D: number[][] = [];
	const cylindricalSurfaces: number[][] = [];
	const conicalSurfaces: number[][] = [];
	const sphericalSurfaces: number[][] = [];
	const toroidalSurfaces: number[][] = [];
	const curveBoundedSurfaces: number[][] = [];
	const rectangularTrimmedSurfaces: number[][] = [];
	const bSplineCurves: number[][] = [];
	const bSplineSurfaces: number[][] = [];
	const rationalBSplineCurves: number[][] = [];
	const rationalBSplineSurfaces: number[][] = [];
	const polylines: number[][] = [];
	const trimmedCurves: number[][] = [];
	const offsetCurves3D: number[][] = [];
	const offsetSurfaces: number[][] = [];
	const geometricallyBoundedSurfaces: number[][] = [];
	const geometricallyBoundedWireframeShapeRepresentations: number[][] = [];
	const shellBasedSurfaceModels: number[][] = [];
	const manifoldSolidBreps: number[][] = [];
	const facetedBreps: number[][] = [];
	const advancedBrepShapeRepresentations: number[][] = [];
	const constructiveSolidGeometry: number[][] = [];
	const boundaryRepresentations: number[][] = [];
	const advancedFaces: number[][] = [];
	const connectedFaceSets: number[][] = [];
	const topologicalRepresentationItems: number[][] = [];
	const geometricRepresentationItems: number[][] = [];
	const mappedItems: number[][] = [];
	const styledItems: number[][] = [];
	const presentationLayerAssignments: number[][] = [];
	const presentationStyleAssignments: number[][] = [];
	const colors: number[][] = [];
	const materials: number[][] = [];
	const measures: number[][] = [];
	const values: number[][] = [];
	const dateAndTimes: number[][] = [];
	const personAndOrganizations: number[][] = [];
	const approvals: number[][] = [];
	const documentReferences: number[][] = [];
	const products: number[][] = [];
	const productCategories: number[][] = [];
	const productDefinitions: number[][] = [];
	const productDefinitionShapes: number[][] = [];
	const shapeAspects: number[][] = [];
	const shapeRepresentations: number[][] = [];
	const assemblyStructures: number[][] = [];

	lines.forEach(line => {
	  // Parsing logic for each entity type
	  // ...

	  // Parse cartesian points
	  if (line.startsWith('CARTESIAN_POINT')) {
		const cartesianPointMatch = line.match(/CARTESIAN_POINT\s+(\d+)\s*=\s*\(([^)]+)\)/);
		if (cartesianPointMatch) {
		  const [, cartesianPointIndex, cartesianPointCoords] = cartesianPointMatch;
		  const coords = cartesianPointCoords.split(',').map(coord => parseFloat(coord.trim()));
		  cartesianPoints.push(coords);
		}
	  }

	  // Parse directions
	  if (line.startsWith('DIRECTION')) {
		const directionMatch = line.match(/DIRECTION\s+(\d+)\s*=\s*\(([^)]+)\)/);
		if (directionMatch) {
		  const [, directionIndex, directionCoords] = directionMatch;
		  const coords = directionCoords.split(',').map(coord => parseFloat(coord.trim()));
		  directions.push(coords);
		}
	  }

	  // Parse vectors
	  if (line.startsWith('VECTOR')) {
		const vectorMatch = line.match(/VECTOR\s+(\d+)\s*=\s*\(([^)]+)\)/);
		if (vectorMatch) {
		  const [, vectorIndex, vectorCoords] = vectorMatch;
		  const coords = vectorCoords.split(',').map(coord => parseFloat(coord.trim()));
		  vectors.push(coords);
		}
	  }

	  // Parse axis2placement3d
	  if (line.startsWith('AXIS2_PLACEMENT_3D')) {
		const axis2Placement3DMatch = line.match(/AXIS2_PLACEMENT_3D\s+(\d+)\s*=\s*\(([^)]+)\)/);
		if (axis2Placement3DMatch) {
		  const [, axis2Placement3DIndex, axis2Placement3DParams] = axis2Placement3DMatch;
		  const params = axis2Placement3DParams.split(',').map(param => parseFloat(param.trim()));
		  axis2Placement3D.push(params);
		}
	  }

	  // Parse cylindrical surfaces
	  if (line.startsWith('CYLINDRICAL_SURFACE')) {
		const cylindricalSurfaceMatch = line.match(/CYLINDRICAL_SURFACE\s+(\d+)\s*=\s*\(([^)]+)\)/);
		if (cylindricalSurfaceMatch) {
		  const [, cylindricalSurfaceIndex, cylindricalSurfaceParams] = cylindricalSurfaceMatch;
		  const params = cylindricalSurfaceParams.split(',').map(param => parseFloat(param.trim()));
		  cylindricalSurfaces.push(params);
		}
	  }

	  // Parse conical surfaces
	  if (line.startsWith('CONICAL_SURFACE')) {
		const conicalSurfaceMatch = line.match(/CONICAL_SURFACE\s+(\d+)\s*=\s*\(([^)]+)\)/);
		if (conicalSurfaceMatch) {
		  const [, conicalSurfaceIndex, conicalSurfaceParams] = conicalSurfaceMatch;
		  const params = conicalSurfaceParams.split(',').map(param => parseFloat(param.trim()));
		  conicalSurfaces.push(params);
		}
	  }

	  // Parse spherical surfaces
	  if (line.startsWith('SPHERICAL_SURFACE')) {
		const sphericalSurfaceMatch = line.match(/SPHERICAL_SURFACE\s+(\d+)\s*=\s*\(([^)]+)\)/);
		if (sphericalSurfaceMatch) {
		  const [, sphericalSurfaceIndex, sphericalSurfaceParams] = sphericalSurfaceMatch;
		  const params = sphericalSurfaceParams.split(',').map(param => parseFloat(param.trim()));
		  sphericalSurfaces.push(params);
		}
	  }

	  // Parse toroidal surfaces
	  if (line.startsWith('TOROIDAL_SURFACE')) {
		const toroidalSurfaceMatch = line.match(/TOROIDAL_SURFACE\s+(\d+)\s*=\s*\(([^)]+)\)/);
		if (toroidalSurfaceMatch) {
		  const [, toroidalSurfaceIndex, toroidalSurfaceParams] = toroidalSurfaceMatch;
		  const params = toroidalSurfaceParams.split(',').map(param => parseFloat(param.trim()));
		  toroidalSurfaces.push(params);
		}
	  }

	  // Parse curve bounded surfaces
	  if (line.startsWith('CURVE_BOUNDED_SURFACE')) {
		const curveBoundedSurfaceMatch = line.match(/CURVE_BOUNDED_SURFACE\s+(\d+)\s*=\s*\(([^)]+)\)/);
		if (curveBoundedSurfaceMatch) {
		  const [, curveBoundedSurfaceIndex, curveBoundedSurfaceParams] = curveBoundedSurfaceMatch;
		  const params = curveBoundedSurfaceParams.split(',').map(param => parseFloat(param.trim()));
		  curveBoundedSurfaces.push(params);
		}
	  }

	  // Parse rectangular trimmed surfaces
	  if (line.startsWith('RECTANGULAR_TRIMMED_SURFACE')) {
		const rectangularTrimmedSurfaceMatch = line.match(/RECTANGULAR_TRIMMED_SURFACE\s+(\d+)\s*=\s*\(([^)]+)\)/);
		if (rectangularTrimmedSurfaceMatch) {
		  const [, rectangularTrimmedSurfaceIndex, rectangularTrimmedSurfaceParams] = rectangularTrimmedSurfaceMatch;
		  const params = rectangularTrimmedSurfaceParams.split(',').map(param => parseFloat(param.trim()));
		  rectangularTrimmedSurfaces.push(params);
		}
	  }

	  // Parse B-spline curves
	  if (line.startsWith('B_SPLINE_CURVE')) {
		const bSplineCurveMatch = line.match(/B_SPLINE_CURVE\s+(\d+)\s*=\s*\(([^)]+)\)/);
		if (bSplineCurveMatch) {
		  const [, bSplineCurveIndex, bSplineCurveParams] = bSplineCurveMatch;
		  const params = bSplineCurveParams.split(',').map(param => parseFloat(param.trim()));
		  bSplineCurves.push(params);
		}
	  }

	  // Parse B-spline surfaces
	  if (line.startsWith('B_SPLINE_SURFACE')) {
		const bSplineSurfaceMatch = line.match(/B_SPLINE_SURFACE\s+(\d+)\s*=\s*\(([^)]+)\)/);
		if (bSplineSurfaceMatch) {
		  const [, bSplineSurfaceIndex, bSplineSurfaceParams] = bSplineSurfaceMatch;
		  const params = bSplineSurfaceParams.split(',').map(param => parseFloat(param.trim()));
		  bSplineSurfaces.push(params);
		}
	  }

	  // Parse rational B-spline curves
	  if (line.startsWith('RATIONAL_B_SPLINE_CURVE')) {
		const rationalBSplineCurveMatch = line.match(/RATIONAL_B_SPLINE_CURVE\s+(\d+)\s*=\s*\(([^)]+)\)/);
		if (rationalBSplineCurveMatch) {
		  const [, rationalBSplineCurveIndex, rationalBSplineCurveParams] = rationalBSplineCurveMatch;
		  const params = rationalBSplineCurveParams.split(',').map(param => parseFloat(param.trim()));
		  rationalBSplineCurves.push(params);
		}
	  }

	  // Parse rational B-spline surfaces
	  if (line.startsWith('RATIONAL_B_SPLINE_SURFACE')) {
		const rationalBSplineSurfaceMatch = line.match(/RATIONAL_B_SPLINE_SURFACE\s+(\d+)\s*=\s*\(([^)]+)\)/);
		if (rationalBSplineSurfaceMatch) {
		  const [, rationalBSplineSurfaceIndex, rationalBSplineSurfaceParams] = rationalBSplineSurfaceMatch;
		  const params = rationalBSplineSurfaceParams.split(',').map(param => parseFloat(param.trim()));
		  rationalBSplineSurfaces.push(params);
		}
	  }

	  // Parse polylines
	  if (line.startsWith('POLYLINE')) {
		const polylineMatch = line.match(/POLYLINE\s+(\d+)\s*=\s*\(([^)]+)\)/);
		if (polylineMatch) {
		  const [, polylineIndex, polylineIndices] = polylineMatch;
		  const indices = polylineIndices.split(',').map(index => parseInt(index.trim()));
		  polylines.push(indices);
		}
	  }

	  // Parse trimmed curves
	  if (line.startsWith('TRIMMED_CURVE')) {
		const trimmedCurveMatch = line.match(/TRIMMED_CURVE\s+(\d+)\s*=\s*\(([^)]+)\)/);
		if (trimmedCurveMatch) {
		  const [, trimmedCurveIndex, trimmedCurveParams] = trimmedCurveMatch;
		  const params = trimmedCurveParams.split(',').map(param => parseFloat(param.trim()));
		  trimmedCurves.push(params);
		}
	  }

	  // Parse offset curves 3D
	  if (line.startsWith('OFFSET_CURVE_3D')) {
		const offsetCurve3DMatch = line.match(/OFFSET_CURVE_3D\s+(\d+)\s*=\s*\(([^)]+)\)/);
		if (offsetCurve3DMatch) {
		  const [, offsetCurve3DIndex, offsetCurve3DParams] = offsetCurve3DMatch;
		  const params = offsetCurve3DParams.split(',').map(param => parseFloat(param.trim()));
		  // Parse offset surfaces
if (line.startsWith('OFFSET_SURFACE')) {
	const offsetSurfaceMatch = line.match(/OFFSET_SURFACE\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (offsetSurfaceMatch) {
	  const [, offsetSurfaceIndex, offsetSurfaceParams] = offsetSurfaceMatch;
	  const params = offsetSurfaceParams.split(',').map(param => parseFloat(param.trim()));
	  offsetSurfaces.push(params);
	}
  }

  // Parse geometrically bounded surfaces
  if (line.startsWith('GEOMETRICALLY_BOUNDED_SURFACE')) {
	const geometricallyBoundedSurfaceMatch = line.match(/GEOMETRICALLY_BOUNDED_SURFACE\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (geometricallyBoundedSurfaceMatch) {
	  const [, geometricallyBoundedSurfaceIndex, geometricallyBoundedSurfaceParams] = geometricallyBoundedSurfaceMatch;
	  const params = geometricallyBoundedSurfaceParams.split(',').map(param => parseFloat(param.trim()));
	  geometricallyBoundedSurfaces.push(params);
	}
  }

  // Parse geometrically bounded wireframe shape representations
  if (line.startsWith('GEOMETRICALLY_BOUNDED_WIREFRAME_SHAPE_REPRESENTATION')) {
	const geometricallyBoundedWireframeShapeRepresentationMatch = line.match(/GEOMETRICALLY_BOUNDED_WIREFRAME_SHAPE_REPRESENTATION\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (geometricallyBoundedWireframeShapeRepresentationMatch) {
	  const [, geometricallyBoundedWireframeShapeRepresentationIndex, geometricallyBoundedWireframeShapeRepresentationParams] = geometricallyBoundedWireframeShapeRepresentationMatch;
	  const params = geometricallyBoundedWireframeShapeRepresentationParams.split(',').map(param => parseFloat(param.trim()));
	  geometricallyBoundedWireframeShapeRepresentations.push(params);
	}
  }

  // Parse shell based surface models
  if (line.startsWith('SHELL_BASED_SURFACE_MODEL')) {
	const shellBasedSurfaceModelMatch = line.match(/SHELL_BASED_SURFACE_MODEL\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (shellBasedSurfaceModelMatch) {
	  const [, shellBasedSurfaceModelIndex, shellBasedSurfaceModelParams] = shellBasedSurfaceModelMatch;
	  const params = shellBasedSurfaceModelParams.split(',').map(param => parseFloat(param.trim()));
	  shellBasedSurfaceModels.push(params);
	}
  }

  // Parse manifold solid breps
  if (line.startsWith('MANIFOLD_SOLID_BREP')) {
	const manifoldSolidBrepMatch = line.match(/MANIFOLD_SOLID_BREP\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (manifoldSolidBrepMatch) {
	  const [, manifoldSolidBrepIndex, manifoldSolidBrepParams] = manifoldSolidBrepMatch;
	  const params = manifoldSolidBrepParams.split(',').map(param => parseFloat(param.trim()));
	  manifoldSolidBreps.push(params);
	}
  }

  // Parse faceted breps
  if (line.startsWith('FACETED_BREP')) {
	const facetedBrepMatch = line.match(/FACETED_BREP\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (facetedBrepMatch) {
	  const [, facetedBrepIndex, facetedBrepParams] = facetedBrepMatch;
	  const params = facetedBrepParams.split(',').map(param => parseFloat(param.trim()));
	  facetedBreps.push(params);
	}
  }

  // Parse advanced brep shape representations
  if (line.startsWith('ADVANCED_BREP_SHAPE_REPRESENTATION')) {
	const advancedBrepShapeRepresentationMatch = line.match(/ADVANCED_BREP_SHAPE_REPRESENTATION\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (advancedBrepShapeRepresentationMatch) {
	  const [, advancedBrepShapeRepresentationIndex, advancedBrepShapeRepresentationParams] = advancedBrepShapeRepresentationMatch;
	  const params = advancedBrepShapeRepresentationParams.split(',').map(param => parseFloat(param.trim()));
	  advancedBrepShapeRepresentations.push(params);
	}
  }

  // Parse constructive solid geometry
  if (line.startsWith('CONSTRUCTIVE_SOLID_GEOMETRY')) {
	const constructiveSolidGeometryMatch = line.match(/CONSTRUCTIVE_SOLID_GEOMETRY\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (constructiveSolidGeometryMatch) {
	  const [, constructiveSolidGeometryIndex, constructiveSolidGeometryParams] = constructiveSolidGeometryMatch;
	  const params = constructiveSolidGeometryParams.split(',').map(param => parseFloat(param.trim()));
	  constructiveSolidGeometry.push(params);
	}
  }

  // Parse boundary representations
  if (line.startsWith('BOUNDARY_REPRESENTATION')) {
	const boundaryRepresentationMatch = line.match(/BOUNDARY_REPRESENTATION\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (boundaryRepresentationMatch) {
	  const [, boundaryRepresentationIndex, boundaryRepresentationParams] = boundaryRepresentationMatch;
	  const params = boundaryRepresentationParams.split(',').map(param => parseFloat(param.trim()));
	  boundaryRepresentations.push(params);
	}
  }

  // Parse advanced faces
  if (line.startsWith('ADVANCED_FACE')) {
	const advancedFaceMatch = line.match(/ADVANCED_FACE\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (advancedFaceMatch) {
	  const [, advancedFaceIndex, advancedFaceParams] = advancedFaceMatch;
	  const params = advancedFaceParams.split(',').map(param => parseFloat(param.trim()));
	  advancedFaces.push(params);
	}
  }

  // Parse connected face sets
  if (line.startsWith('CONNECTED_FACE_SET')) {
	const connectedFaceSetMatch = line.match(/CONNECTED_FACE_SET\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (connectedFaceSetMatch) {
	  const [, connectedFaceSetIndex, connectedFaceSetParams] = connectedFaceSetMatch;
	  const params = connectedFaceSetParams.split(',').map(param => parseFloat(param.trim()));
	  connectedFaceSets.push(params);
	}
  }

  // Parse topological representation items
  if (line.startsWith('TOPOLOGICAL_REPRESENTATION_ITEM')) {
	const topologicalRepresentationItemMatch = line.match(/TOPOLOGICAL_REPRESENTATION_ITEM\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (topologicalRepresentationItemMatch) {
	  const [, topologicalRepresentationItemIndex, topologicalRepresentationItemParams] = topologicalRepresentationItemMatch;
	  const params = topologicalRepresentationItemParams.split(',').map(param => parseFloat(param.trim()));
	  topologicalRepresentationItems.push(params);
	}
  }

  // Parse geometric representation items
  if (line.startsWith('GEOMETRIC_REPRESENTATION_ITEM')) {
	const geometricRepresentationItemMatch = line.match(/GEOMETRIC_REPRESENTATION_ITEM\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (geometricRepresentationItemMatch) {
	  const [, geometricRepresentationItemIndex, geometricRepresentationItemParams] = geometricRepresentationItemMatch;
	  const params = geometricRepresentationItemParams.split(',').map(param => parseFloat(param.trim()));
	  geometricRepresentationItems.push(params);
	}
  }

  // Parse mapped items
  if (line.startsWith('MAPPED_ITEM')) {
	const mappedItemMatch = line.match(/MAPPED_ITEM\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (mappedItemMatch) {
	  const [, mappedItemIndex, mappedItemParams] = mappedItemMatch;
	  const params = mappedItemParams.split(',').map(param => parseFloat(param.trim()));
	  mappedItems.push(params);
	}
  }

  // Parse styled items
  if (line.startsWith('STYLED_ITEM')) {
	const styledItemMatch = line.match(/STYLED_ITEM\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (styledItemMatch) {
	  const [, styledItemIndex, styledItemParams] = styledItemMatch;
	  const params = styledItemParams.split(',').map(param => parseFloat(param.trim()));
	  styledItems.push(params);
	}
  }

  // Parse presentation layer assignments
  if (line.startsWith('PRESENTATION_LAYER_ASSIGNMENT')) {
	const presentationLayerAssignmentMatch = line.match(/PRESENTATION_LAYER_ASSIGNMENT\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (presentationLayerAssignmentMatch) {
	  const [, presentationLayerAssignmentIndex, presentationLayerAssignmentParams] = presentationLayerAssignmentMatch;
	  const params = presentationLayerAssignmentParams.split(',').map(param => parseFloat(param.trim()));
	  presentationLayerAssignments.push(params);
	}
  }

  // Parse presentation style assignments
  if (line.startsWith('PRESENTATION_STYLE_ASSIGNMENT')) {
	const presentationStyleAssignmentMatch = line.match(/PRESENTATION_STYLE_ASSIGNMENT\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (presentationStyleAssignmentMatch) {
	  const [, presentationStyleAssignmentIndex, presentationStyleAssignmentParams] = presentationStyleAssignmentMatch;
	  const params = presentationStyleAssignmentParams.split(',').map(param => parseFloat(param.trim()));
	  presentationStyleAssignments.push(params);
	}
  }

  // Parse colors
  if (line.startsWith('COLOR')) {
	const colorMatch = line.match(/COLOR\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (colorMatch) {
	  const [, colorIndex, colorParams] = colorMatch;
	  const params = colorParams.split(',').map(param => parseFloat(param.trim()));
	  colors.push(params);
	}
  }

  // Parse materials
  if (line.startsWith('MATERIAL')) {
	const materialMatch = line.match(/MATERIAL\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (materialMatch) {
	  const [, materialIndex, materialParams] = materialMatch;
	  const params = materialParams.split(',').map(param => parseFloat(param.trim()));
	  materials.push(params);
	}
  }

  // Parse measures
  if (line.startsWith('MEASURE')) {
	const measureMatch = line.match(/MEASURE\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (measureMatch) {
	  const [, measureIndex, measureParams] = measureMatch;
	  const params = measureParams.split(',').map(param => parseFloat(param.trim()));
	  measures.push(params);
	}
  }

  // Parse values
  if (line.startsWith('VALUE')) {
	const valueMatch = line.match(/VALUE\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (valueMatch) {
	  const [, valueIndex, valueParams] = valueMatch;
	  const params = valueParams.split(',').map(param => parseFloat(param.trim()));
	  values.push(params);
	}
  }

  // Parse date and times
  if (line.startsWith('DATE_AND_TIME')) {
	const dateAndTimeMatch = line.match(/DATE_AND_TIME\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (dateAndTimeMatch) {
	  const [, dateAndTimeIndex, dateAndTimeParams] = dateAndTimeMatch;
	  const params = dateAndTimeParams.split(',').map(param => parseFloat(param.trim()));
	  dateAndTimes.push(params);
	}
  }

  // Parse person and organizations
  if (line.startsWith('PERSON_AND_ORGANIZATION')) {
	const personAndOrganizationMatch = line.match(/PERSON_AND_ORGANIZATION\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (personAndOrganizationMatch) {
	  const [, personAndOrganizationIndex, personAndOrganizationParams] = personAndOrganizationMatch;
	  const params = personAndOrganizationParams.split(',').map(param => parseFloat(param.trim()));
	  personAndOrganizations.push(params);
	}
  }

  // Parse approvals
  if (line.startsWith('APPROVAL')) {
	const approvalMatch = line.match(/APPROVAL\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (approvalMatch) {
	  const [, approvalIndex, approvalParams] = approvalMatch;
	  const params = approvalParams.split(',').map(param => parseFloat(param.trim()));
	  approvals.push(params);
	}
  }

  // Parse document references
  if (line.startsWith('DOCUMENT_REFERENCE')) {
	const documentReferenceMatch = line.match(/DOCUMENT_REFERENCE\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (documentReferenceMatch) {
	  const [, documentReferenceIndex, documentReferenceParams] = documentReferenceMatch;
	  const params = documentReferenceParams.split(',').map(param => parseFloat(param.trim()));
	  documentReferences.push(params);
	}
  }

  // Parse products
  if (line.startsWith('PRODUCT')) {
	const productMatch = line.match(/PRODUCT\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (productMatch) {
	  const [, productIndex, productParams] = productMatch;
	  const params = productParams.split(',').map(param => parseFloat(param.trim()));
	  products.push(params);
	}
  }

  // Parse product categories
  if (line.startsWith('PRODUCT_CATEGORY')) {
	const productCategoryMatch = line.match(/PRODUCT_CATEGORY\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (productCategoryMatch) {
	  const [, productCategoryIndex, productCategoryParams] = productCategoryMatch;
	  const params = productCategoryParams.split(',').map(param => parseFloat(param.trim()));
	  productCategories.push(params);
	}
  }

  // Parse product definitions
  if (line.startsWith('PRODUCT_DEFINITION')) {
	const productDefinitionMatch = line.match(/PRODUCT_DEFINITION\s+(\d+)\s*=\s*(([^)]+))/);
	if (productDefinitionMatch) {
	const [, productDefinitionIndex, productDefinitionParams] = productDefinitionMatch;
	const params = productDefinitionParams.split(',').map(param => parseFloat(param.trim()));
	productDefinitions.push(params);
	}
	}

// Parse product definition shapes
if (line.startsWith('PRODUCT_DEFINITION_SHAPE')) {
	const productDefinitionShapeMatch = line.match(/PRODUCT_DEFINITION_SHAPE\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (productDefinitionShapeMatch) {
	  const [, productDefinitionShapeIndex, productDefinitionShapeParams] = productDefinitionShapeMatch;
	  const params = productDefinitionShapeParams.split(',').map(param => parseFloat(param.trim()));
	  productDefinitionShapes.push(params);
	}
  }

  // Parse shape aspects
  if (line.startsWith('SHAPE_ASPECT')) {
	const shapeAspectMatch = line.match(/SHAPE_ASPECT\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (shapeAspectMatch) {
	  const [, shapeAspectIndex, shapeAspectParams] = shapeAspectMatch;
	  const params = shapeAspectParams.split(',').map(param => parseFloat(param.trim()));
	  shapeAspects.push(params);
	}
  }

  // Parse shape representations
  if (line.startsWith('SHAPE_REPRESENTATION')) {
	const shapeRepresentationMatch = line.match(/SHAPE_REPRESENTATION\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (shapeRepresentationMatch) {
	  const [, shapeRepresentationIndex, shapeRepresentationParams] = shapeRepresentationMatch;
	  const params = shapeRepresentationParams.split(',').map(param => parseFloat(param.trim()));
	  shapeRepresentations.push(params);
	}
  }

  // Parse assembly structures
  if (line.startsWith('ASSEMBLY_STRUCTURE')) {
	const assemblyStructureMatch = line.match(/ASSEMBLY_STRUCTURE\s+(\d+)\s*=\s*\(([^)]+)\)/);
	if (assemblyStructureMatch) {
	  const [, assemblyStructureIndex, assemblyStructureParams] = assemblyStructureMatch;
	  const params = assemblyStructureParams.split(',').map(param => parseFloat(param.trim()));
	  assemblyStructures.push(params);
	}
  }
  });
  return {
  vertices,
  edges,
  faces,
  curves,
  surfaces,
  points,
  lines,
  loops,
  planes,
  circles,
  compositeCurves,
  compositeSurfaces,
  cartesianPoints,
  directions,
  vectors,
  axis2Placement3D,
  cylindricalSurfaces,
  conicalSurfaces,
  sphericalSurfaces,
  toroidalSurfaces,
  curveBoundedSurfaces,
  rectangularTrimmedSurfaces,
  bSplineCurves,
  bSplineSurfaces,
  rationalBSplineCurves,
  rationalBSplineSurfaces,
  polylines,
  trimmedCurves,
  offsetCurves3D,
  offsetSurfaces,
  geometricallyBoundedSurfaces,
  geometricallyBoundedWireframeShapeRepresentations,
  shellBasedSurfaceModels,
  manifoldSolidBreps,
  facetedBreps,
  advancedBrepShapeRepresentations,
  constructiveSolidGeometry,
  boundaryRepresentations,
  advancedFaces,
  connectedFaceSets,
  topologicalRepresentationItems,
  geometricRepresentationItems,
  mappedItems,
  styledItems,
  presentationLayerAssignments,
  presentationStyleAssignments,
  colors,
  materials,
  measures,
  values,
  dateAndTimes,
  personAndOrganizations,
  approvals,
  documentReferences,
  products,
  productCategories,
  productDefinitions,
  productDefinitionShapes,
  shapeAspects,
  shapeRepresentations,
  assemblyStructures
  };
  }

