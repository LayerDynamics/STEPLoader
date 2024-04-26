// src/createThreeGeometry.ts
import * as THREE from 'three'
import { StepData } from './parseSTEP'

function createThreeGeometry(data: StepData): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry()

  // Create vertices
  if (data.vertices.length) {
    const vertices = new Float32Array(data.vertices.flat())
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
  }

  // Create edges
  if (data.edges.length) {
    const edgeVertices = data.edges.flatMap((edge) =>
      edge.map((index) => data.vertices[index - 1]),
    )
    const edgeGeometry = new THREE.BufferGeometry()
    edgeGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(edgeVertices.flat(), 3),
    )
    geometry.merge(edgeGeometry)
  }

  // Create faces
  if (data.faces.length) {
    const faces = new Uint32Array(data.faces.flat().map((index) => index - 1))
    geometry.setIndex(new THREE.BufferAttribute(faces, 1))
  }

  // Create curves
  if (data.curves.length) {
    const curveVertices = data.curves.flatMap((curve) =>
      curve.map((index) => data.vertices[index - 1]),
    )
    const curveGeometry = new THREE.BufferGeometry()
    curveGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(curveVertices.flat(), 3),
    )
    geometry.merge(curveGeometry)
  }

  // Create surfaces
  if (data.surfaces.length) {
    const surfaceGeometry = new THREE.BufferGeometry()
    const surfaceVertices = data.surfaces.flatMap((surface) =>
      surface.map((index) => data.vertices[index - 1]),
    )
    surfaceGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(surfaceVertices.flat(), 3),
    )
    geometry.merge(surfaceGeometry)
  }

  // Create points
  if (data.points.length) {
    const pointsGeometry = new THREE.BufferGeometry()
    pointsGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(data.points.flat(), 3),
    )
    geometry.merge(pointsGeometry)
  }

  // Create lines
  if (data.lines.length) {
    const lineVertices = data.lines.flatMap((line) =>
      line.map((index) => data.vertices[index - 1]),
    )
    const lineGeometry = new THREE.BufferGeometry()
    lineGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(lineVertices.flat(), 3),
    )
    geometry.merge(lineGeometry)
  }

  // Create loops
  if (data.loops.length) {
    const loopGeometry = new THREE.BufferGeometry()
    const loopVertices = data.loops.flatMap((loop) =>
      loop.map((index) => data.vertices[index - 1]),
    )
    loopGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(loopVertices.flat(), 3),
    )
    geometry.merge(loopGeometry)
  }

  // Create planes
  if (data.planes.length) {
    const planeGeometry = new THREE.BufferGeometry()
    const planeVertices = data.planes.flatMap((plane) => plane)
    planeGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(planeVertices.flat(), 3),
    )
    geometry.merge(planeGeometry)
  }

  // Create circles
  if (data.circles.length) {
    const circleGeometry = new THREE.BufferGeometry()
    const circleVertices = data.circles.flatMap((circle) => circle)
    circleGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(circleVertices.flat(), 3),
    )
    geometry.merge(circleGeometry)
  }

  // Create composite curves
  if (data.compositeCurves.length) {
    const compositeCurveGeometry = new THREE.BufferGeometry()
    const compositeCurveVertices = data.compositeCurves.flatMap(
      (compositeCurve) =>
        compositeCurve.map((index) => data.vertices[index - 1]),
    )
    compositeCurveGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(compositeCurveVertices.flat(), 3),
    )
    geometry.merge(compositeCurveGeometry)
  }

  // Create composite surfaces
  if (data.compositeSurfaces.length) {
    const compositeSurfaceGeometry = new THREE.BufferGeometry()
    const compositeSurfaceVertices = data.compositeSurfaces.flatMap(
      (compositeSurface) =>
        compositeSurface.map((index) => data.vertices[index - 1]),
    )
    compositeSurfaceGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(compositeSurfaceVertices.flat(), 3),
    )
    geometry.merge(compositeSurfaceGeometry)
  }

  // Create cartesian points
  if (data.cartesianPoints.length) {
    const cartesianPointsGeometry = new THREE.BufferGeometry()
    cartesianPointsGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(data.cartesianPoints.flat(), 3),
    )
    geometry.merge(cartesianPointsGeometry)
  }

  // Create directions
  if (data.directions.length) {
    const directionsGeometry = new THREE.BufferGeometry()
    directionsGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(data.directions.flat(), 3),
    )
    geometry.merge(directionsGeometry)
  }

  // Create vectors
  if (data.vectors.length) {
    const vectorsGeometry = new THREE.BufferGeometry()
    vectorsGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(data.vectors.flat(), 3),
    )
    geometry.merge(vectorsGeometry)
  }

  // Create axis2Placement3D
  if (data.axis2Placement3D.length) {
    const axis2Placement3DGeometry = new THREE.BufferGeometry()
    const axis2Placement3DVertices = data.axis2Placement3D.flatMap(
      (placement) => placement,
    )
    axis2Placement3DGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(axis2Placement3DVertices.flat(), 3),
    )
    geometry.merge(axis2Placement3DGeometry)
  }

  // Create cylindrical surfaces
  if (data.cylindricalSurfaces.length) {
    const cylindricalSurfaceGeometry = new THREE.BufferGeometry()
    const cylindricalSurfaceVertices = data.cylindricalSurfaces.flatMap(
      (surface) => surface,
    )
    cylindricalSurfaceGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(cylindricalSurfaceVertices.flat(), 3),
    )
    geometry.merge(cylindricalSurfaceGeometry)
  }

  // Create conical surfaces
  if (data.conicalSurfaces.length) {
    const conicalSurfaceGeometry = new THREE.BufferGeometry()
    const conicalSurfaceVertices = data.conicalSurfaces.flatMap(
      (surface) => surface,
    )
    conicalSurfaceGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(conicalSurfaceVertices.flat(), 3),
    )
    geometry.merge(conicalSurfaceGeometry)
  }

  // Create spherical surfaces
  if (data.sphericalSurfaces.length) {
    const sphericalSurfaceGeometry = new THREE.BufferGeometry()
    const sphericalSurfaceVertices = data.sphericalSurfaces.flatMap(
      (surface) => surface,
    )
    sphericalSurfaceGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(sphericalSurfaceVertices.flat(), 3),
    )
    geometry.merge(sphericalSurfaceGeometry)
  }

  // Create toroidal surfaces
  if (data.toroidalSurfaces.length) {
    const toroidalSurfaceGeometry = new THREE.BufferGeometry()
    const toroidalSurfaceVertices = data.toroidalSurfaces.flatMap(
      (surface) => surface,
    )
    toroidalSurfaceGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(toroidalSurfaceVertices.flat(), 3),
    )
    geometry.merge(toroidalSurfaceGeometry)
  }

  // Create curve bounded surfaces
  if (data.curveBoundedSurfaces.length) {
    const curveBoundedSurfaceGeometry = new THREE.BufferGeometry()
    const curveBoundedSurfaceVertices = data.curveBoundedSurfaces.flatMap(
      (surface) => surface,
    )
    curveBoundedSurfaceGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(curveBoundedSurfaceVertices.flat(), 3),
    )
    geometry.merge(curveBoundedSurfaceGeometry)
  }

  // Create rectangular trimmed surfaces
  if (data.rectangularTrimmedSurfaces.length) {
    const rectangularTrimmedSurfaceGeometry = new THREE.BufferGeometry()
    const rectangularTrimmedSurfaceVertices = data.rectangularTrimmedSurfaces.flatMap(
      (surface) => surface,
    )
    rectangularTrimmedSurfaceGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(
        rectangularTrimmedSurfaceVertices.flat(),
        3,
      ),
    )
    geometry.merge(rectangularTrimmedSurfaceGeometry)
  }

  // Create B-spline curves
  if (data.bSplineCurves.length) {
    const bSplineCurveGeometry = new THREE.BufferGeometry()
    const bSplineCurveVertices = data.bSplineCurves.flatMap((curve) => curve)
    bSplineCurveGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(bSplineCurveVertices.flat(), 3),
    )
    geometry.merge(bSplineCurveGeometry)
  }

  // Create B-spline surfaces
  if (data.bSplineSurfaces.length) {
    const bSplineSurfaceGeometry = new THREE.BufferGeometry()
    const bSplineSurfaceVertices = data.bSplineSurfaces.flatMap(
      (surface) => surface,
    )
    bSplineSurfaceGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(bSplineSurfaceVertices.flat(), 3),
    )
    geometry.merge(bSplineSurfaceGeometry)
  }

  // Create rational B-spline curves
  if (data.rationalBSplineCurves.length) {
    const rationalBSplineCurveGeometry = new THREE.BufferGeometry()
    const rationalBSplineCurveVertices = data.rationalBSplineCurves.flatMap(
      (curve) => curve,
    )
    rationalBSplineCurveGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(rationalBSplineCurveVertices.flat(), 3),
    )
    geometry.merge(rationalBSplineCurveGeometry)
  }

  // Create rational B-spline surfaces
  if (data.rationalBSplineSurfaces.length) {
    const rationalBSplineSurfaceGeometry = new THREE.BufferGeometry()
    const rationalBSplineSurfaceVertices = data.rationalBSplineSurfaces.flatMap(
      (surface) => surface,
    )
    rationalBSplineSurfaceGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(
        rationalBSplineSurfaceVertices.flat(),
        3,
      ),
    )
    geometry.merge(rationalBSplineSurfaceGeometry)
  }

  // Create polylines
  if (data.polylines.length) {
    const polylineGeometry = new THREE.BufferGeometry()
    const polylineVertices = data.polylines.flatMap((polyline) =>
      polyline.map((index) => data.vertices[index - 1]),
    )
    polylineGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(polylineVertices.flat(), 3),
    )
    geometry.merge(polylineGeometry)
  }

  // Create trimmed curves
  if (data.trimmedCurves.length) {
    const trimmedCurveGeometry = new THREE.BufferGeometry()
    const trimmedCurveVertices = data.trimmedCurves.flatMap((curve) => curve)
    trimmedCurveGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(trimmedCurveVertices.flat(), 3),
    )
    geometry.merge(trimmedCurveGeometry)
  }

  // Create offset curves 3D
  if (data.offsetCurves3D.length) {
    const offsetCurve3DGeometry = new THREE.BufferGeometry()
    const offsetCurve3DVertices = data.offsetCurves3D.flatMap((curve) => curve)
    offsetCurve3DGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(offsetCurve3DVertices.flat(), 3),
    )
    geometry.merge(offsetCurve3DGeometry)
  }

  // Create offset surfaces
  if (data.offsetSurfaces.length) {
    const offsetSurfaceGeometry = new THREE.BufferGeometry()
    const offsetSurfaceVertices = data.offsetSurfaces.flatMap(
      (surface) => surface,
    )
    offsetSurfaceGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(offsetSurfaceVertices.flat(), 3),
    )
    geometry.merge(offsetSurfaceGeometry)
  }

  // Create geometrically bounded surfaces
  if (data.geometricallyBoundedSurfaces.length) {
    const geometricallyBoundedSurfaceGeometry = new THREE.BufferGeometry()
    const geometricallyBoundedSurfaceVertices = data.geometricallyBoundedSurfaces.flatMap(
      (surface) => surface,
    )
    geometricallyBoundedSurfaceGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(
        geometricallyBoundedSurfaceVertices.flat(),
        3,
      ),
    )
    geometry.merge(geometricallyBoundedSurfaceGeometry)
  }

  // Create geometrically bounded wireframe shape representations
  if (data.geometricallyBoundedWireframeShapeRepresentations.length) {
    const geometricallyBoundedWireframeShapeRepresentationGeometry = new THREE.BufferGeometry()
    const geometricallyBoundedWireframeShapeRepresentationVertices = data.geometricallyBoundedWireframeShapeRepresentations.flatMap(
      (representation) => representation,
    )
    geometricallyBoundedWireframeShapeRepresentationGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(
        geometricallyBoundedWireframeShapeRepresentationVertices.flat(),
        3,
      ),
    )
    geometry.merge(geometricallyBoundedWireframeShapeRepresentationGeometry)
  }
  // Create shell based surface models
  if (data.shellBasedSurfaceModels.length) {
    const shellBasedSurfaceModelGeometry = new THREE.BufferGeometry()
    const shellBasedSurfaceModelVertices = data.shellBasedSurfaceModels.flatMap(
      (model) => model,
    )
    shellBasedSurfaceModelGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(
        shellBasedSurfaceModelVertices.flat(),
        3,
      ),
    )
    geometry.merge(shellBasedSurfaceModelGeometry)
  }
  // Create manifold solid breps
  if (data.manifoldSolidBreps.length) {
    const manifoldSolidBrepGeometry = new THREE.BufferGeometry()
    const manifoldSolidBrepVertices = data.manifoldSolidBreps.flatMap(
      (brep) => brep,
    )
    manifoldSolidBrepGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(manifoldSolidBrepVertices.flat(), 3),
    )
    geometry.merge(manifoldSolidBrepGeometry)
  }
  // Create faceted breps
  if (data.facetedBreps.length) {
    const facetedBrepGeometry = new THREE.BufferGeometry()
    const facetedBrepVertices = data.facetedBreps.flatMap((brep) => brep)
    facetedBrepGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(facetedBrepVertices.flat(), 3),
    )
    geometry.merge(facetedBrepGeometry)
  }
  // Create advanced brep shape representations
  if (data.advancedBrepShapeRepresentations.length) {
    const advancedBrepShapeRepresentationGeometry = new THREE.BufferGeometry()
    const advancedBrepShapeRepresentationVertices = data.advancedBrepShapeRepresentations.flatMap(
      (representation) => representation,
    )
    advancedBrepShapeRepresentationGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(
        advancedBrepShapeRepresentationVertices.flat(),
        3,
      ),
    )
    geometry.merge(advancedBrepShapeRepresentationGeometry)
  }
  // Create constructive solid geometry
  if (data.constructiveSolidGeometry.length) {
    const constructiveSolidGeometryGeometry = new THREE.BufferGeometry()
    const constructiveSolidGeometryVertices = data.constructiveSolidGeometry.flatMap(
      (geometry) => geometry,
    )
    constructiveSolidGeometryGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(
        constructiveSolidGeometryVertices.flat(),
        3,
      ),
    )
    geometry.merge(constructiveSolidGeometryGeometry)
  }
  // Create boundary representations
  if (data.boundaryRepresentations.length) {
    const boundaryRepresentationGeometry = new THREE.BufferGeometry()
    const boundaryRepresentationVertices = data.boundaryRepresentations.flatMap(
      (representation) => representation,
    )
    boundaryRepresentationGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(
        boundaryRepresentationVertices.flat(),
        3,
      ),
    )
    geometry.merge(boundaryRepresentationGeometry)
  }
  // Create advanced faces
  if (data.advancedFaces.length) {
    const advancedFaceGeometry = new THREE.BufferGeometry()
    const advancedFaceVertices = data.advancedFaces.flatMap((face) => face)
    advancedFaceGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(advancedFaceVertices.flat(), 3),
    )
    geometry.merge(advancedFaceGeometry)
  }
  // Create connected face sets
  if (data.connectedFaceSets.length) {
    const connectedFaceSetGeometry = new THREE.BufferGeometry()
    const connectedFaceSetVertices = data.connectedFaceSets.flatMap(
      (faceSet) => faceSet,
    )
    connectedFaceSetGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(connectedFaceSetVertices.flat(), 3),
    )
    geometry.merge(connectedFaceSetGeometry)
  }
  // Create topological representation items
  if (data.topologicalRepresentationItems.length) {
    const topologicalRepresentationItemGeometry = new THREE.BufferGeometry()
    const topologicalRepresentationItemVertices = data.topologicalRepresentationItems.flatMap(
      (item) => item,
    )
    topologicalRepresentationItemGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(
        topologicalRepresentationItemVertices.flat(),
        3,
      ),
    )
    geometry.merge(topologicalRepresentationItemGeometry)
  }
  // Create geometric representation items
  if (data.geometricRepresentationItems.length) {
    const geometricRepresentationItemGeometry = new THREE.BufferGeometry()
    const geometricRepresentationItemVertices = data.geometricRepresentationItems.flatMap(
      (item) => item,
    )
    geometricRepresentationItemGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(
        geometricRepresentationItemVertices.flat(),
        3,
      ),
    )
    geometry.merge(geometricRepresentationItemGeometry)
  }
  // Create mapped items
  if (data.mappedItems.length) {
    const mappedItemGeometry = new THREE.BufferGeometry()
    const mappedItemVertices = data.mappedItems.flatMap((item) => item)
    mappedItemGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(mappedItemVertices.flat(), 3),
    )
    geometry.merge(mappedItemGeometry)
  }
  // Create styled items
  if (data.styledItems.length) {
    const styledItemGeometry = new THREE.BufferGeometry()
    const styledItemVertices = data.styledItems.flatMap((item) => item)
    styledItemGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(styledItemVertices.flat(), 3),
    )
    geometry.merge(styledItemGeometry)
  }
  // Create presentation layer assignments
  if (data.presentationLayerAssignments.length) {
    const presentationLayerAssignmentGeometry = new THREE.BufferGeometry()
    const presentationLayerAssignmentVertices = data.presentationLayerAssignments.flatMap(
      (assignment) => assignment,
    )
    presentationLayerAssignmentGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(
        presentationLayerAssignmentVertices.flat(),
        3,
      ),
    )
    geometry.merge(presentationLayerAssignmentGeometry)
  }
  // Create presentation style assignments
  if (data.presentationStyleAssignments.length) {
    const presentationStyleAssignmentGeometry = new THREE.BufferGeometry()
    const presentationStyleAssignmentVertices = data.presentationStyleAssignments.flatMap(
      (assignment) => assignment,
    )
    presentationStyleAssignmentGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(
        presentationStyleAssignmentVertices.flat(),
        3,
      ),
    )
    geometry.merge(presentationStyleAssignmentGeometry)
  }
  // Create colors
  if (data.colors.length) {
    const colorGeometry = new THREE.BufferGeometry()
    const colorVertices = data.colors.flatMap((color) => color)
    colorGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(colorVertices.flat(), 3),
    )
    geometry.merge(colorGeometry)
  }
  // Create materials
  if (data.materials.length) {
    const materialGeometry = new THREE.BufferGeometry()
    const materialVertices = data.materials.flatMap((material) => material)
    materialGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(materialVertices.flat(), 3),
    )
    geometry.merge(materialGeometry)
  }
  // Create measures
  if (data.measures.length) {
    const measureGeometry = new THREE.BufferGeometry()
    const measureVertices = data.measures.flatMap((measure) => measure)
    measureGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(measureVertices.flat(), 3),
    )
    geometry.merge(measureGeometry)
  }
  // Create values
  if (data.values.length) {
    const valueGeometry = new THREE.BufferGeometry()
    const valueVertices = data.values.flatMap((value) => value)
    valueGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(valueVertices.flat(), 3),
    )
    geometry.merge(valueGeometry)
  }
  // Create date and times
  if (data.dateAndTimes.length) {
    const dateAndTimeGeometry = new THREE.BufferGeometry()
    const dateAndTimeVertices = data.dateAndTimes.flatMap(
      (dateAndTime) => dateAndTime,
    )
    dateAndTimeGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(dateAndTimeVertices.flat(), 3),
    )
    geometry.merge(dateAndTimeGeometry)
  }
  // Create person and organizations
  if (data.personAndOrganizations.length) {
    const personAndOrganizationGeometry = new THREE.BufferGeometry()
    const personAndOrganizationVertices = data.personAndOrganizations.flatMap(
      (personAndOrganization) => personAndOrganization,
    )
    personAndOrganizationGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(personAndOrganizationVertices.flat(), 3),
    )
    geometry.merge(personAndOrganizationGeometry)
  }
  // Create approvals
  if (data.approvals.length) {
    const approvalGeometry = new THREE.BufferGeometry()
    const approvalVertices = data.approvals.flatMap((approval) => approval)
    approvalGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(approvalVertices.flat(), 3),
    )
    geometry.merge(approvalGeometry)
  }
  // Create document references
  if (data.documentReferences.length) {
    const documentReferenceGeometry = new THREE.BufferGeometry()
    const documentReferenceVertices = data.documentReferences.flatMap(
      (reference) => reference,
    )
    documentReferenceGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(documentReferenceVertices.flat(), 3),
    )
    geometry.merge(documentReferenceGeometry)
  }
  // Create products
  if (data.products.length) {
    const productGeometry = new THREE.BufferGeometry()
    const productVertices = data.products.flatMap((product) => product)
    productGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(productVertices.flat(), 3),
    )
    geometry.merge(productGeometry)
  }
  // Create product categories
  if (data.productCategories.length) {
    const productCategoryGeometry = new THREE.BufferGeometry()
    const productCategoryVertices = data.productCategories.flatMap(
      (category) => category,
    )
    productCategoryGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(productCategoryVertices.flat(), 3),
    )
    geometry.merge(productCategoryGeometry)
  }
  // Create product definitions
  if (data.productDefinitions.length) {
    const productDefinitionGeometry = new THREE.BufferGeometry()
    const productDefinitionVertices = data.productDefinitions.flatMap(
      (definition) => definition,
    )
    productDefinitionGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(productDefinitionVertices.flat(), 3),
    )
    geometry.merge(productDefinitionGeometry)
  }
  // Create product definition shapes
  if (data.productDefinitionShapes.length) {
    const productDefinitionShapeGeometry = new THREE.BufferGeometry()
    const productDefinitionShapeVertices = data.productDefinitionShapes.flatMap(
      (shape) => shape,
    )
    productDefinitionShapeGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(
        productDefinitionShapeVertices.flat(),
        3,
      ),
    )
    geometry.merge(productDefinitionShapeGeometry)
  }
  // Create shape aspects
  if (data.shapeAspects.length) {
    const shapeAspectGeometry = new THREE.BufferGeometry()
    const shapeAspectVertices = data.shapeAspects.flatMap((aspect) => aspect)
    shapeAspectGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(shapeAspectVertices.flat(), 3),
    )
    geometry.merge(shapeAspectGeometry)
  }
  // Create shape representations
  if (data.shapeRepresentations.length) {
    const shapeRepresentationGeometry = new THREE.BufferGeometry()
    const shapeRepresentationVertices = data.shapeRepresentations.flatMap(
      (representation) => representation,
    )
    shapeRepresentationGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(shapeRepresentationVertices.flat(), 3),
    )
    geometry.merge(shapeRepresentationGeometry)
  }
  // Create assembly structures
  if (data.assemblyStructures.length) {
    const assemblyStructureGeometry = new THREE.BufferGeometry()
    const assemblyStructureVertices = data.assemblyStructures.flatMap(
      (structure) => structure,
    )
    assemblyStructureGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(assemblyStructureVertices.flat(), 3),
    )
    geometry.merge(assemblyStructureGeometry)
  }
  geometry.computeVertexNormals()
  return geometry
}
export default createThreeGeometry
